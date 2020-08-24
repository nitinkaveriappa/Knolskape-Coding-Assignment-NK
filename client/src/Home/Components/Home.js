import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MenuBar from './MenuBar';
import ContactsTable from './ContactsTable';
import { getContacts, hitLogout } from '../../Services';

const Home = () => {
  let history = useHistory();
  const signal = axios.CancelToken.source();
  const [contacts, setContacts] = useState('');

  const fetchContacts = async (pageToken = null) => {
    try {
      const response = await getContacts(pageToken, signal.token);
      setContacts(response);
      if (!response.email) {
        Logout();
      }
    } catch (error) {
      console.log('API Error', error);
    }
  };

  useEffect(() => {
    fetchContacts();
    return () => {
      signal.cancel('Request Cancelled');
    };
  }, []);

  const Logout = async () => {
    try {
      await hitLogout(signal.token);
      setContacts('');
      history.push('/login');
    } catch (error) {
      console.log('API Error', error);
    }
  };

  return (
    <>
      <MenuBar contacts={contacts} handleLogout={Logout} />
      <ContactsTable contacts={contacts} handleFetchRows={fetchContacts} />
    </>
  );
};

export default Home;
