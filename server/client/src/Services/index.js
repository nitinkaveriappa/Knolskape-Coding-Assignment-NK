import axios from 'axios';

const URL = process.env.REACT_APP_API;

const getContacts = async (pageToken, cancelToken) => {
  let URI = URL.concat(`/users/list`);
  if (pageToken) {
    URI = URI.concat(`?pageToken=${pageToken}`);
  }
  try {
    const { data } = await axios.get(URI, {
      withCredentials: true,
      cancelToken,
    });
    return data;
  } catch (error) {
    return error;
  }
};

const hitLogout = async (cancelToken) => {
  let URI = URL.concat(`/auth/logout`);
  try {
    const { data } = await axios.get(URI, {
      withCredentials: true,
      cancelToken,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export { getContacts, hitLogout };
