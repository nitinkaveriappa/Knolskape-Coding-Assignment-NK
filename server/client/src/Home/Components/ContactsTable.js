import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableFooter,
  TableContainer,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
  footer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 170,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
  },
];

const ContactsTable = ({ contacts, handleFetchRows }) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (contacts.connections) {
      setRows([
        ...map(contacts.connections, (item) => {
          const name =
            item.names && item.names[0].displayName
              ? item.names[0].displayName
              : '-';
          const phone =
            item.phoneNumbers && item.phoneNumbers[0].canonicalForm
              ? item.phoneNumbers[0].canonicalForm
              : '-';
          const email =
            item.emailAddresses && item.emailAddresses[0].value
              ? item.emailAddresses[0].value
              : '-';
          return createData(name, phone, email);
        }),
      ]);
    }
  }, [contacts]);

  // const handlePrevPageButtonClick = (event) => {
  //   handleFetchRows(contacts.prevPageToken);
  // };

  const handleNextPageButtonClick = (event) => {
    handleFetchRows(contacts.nextPageToken);
  };

  const createData = (name, phone, email) => {
    return { name, phone, email };
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter></TableFooter>
          </Table>
        </TableContainer>
        <div className={classes.footer}>
          {/* <IconButton
            onClick={handlePrevPageButtonClick}
            disabled={!contacts.prevPageToken}
            aria-label="previous page"
          >
            <KeyboardArrowLeft />
          </IconButton> */}
          <IconButton
            onClick={handleNextPageButtonClick}
            disabled={!contacts.nextPageToken}
            aria-label="next page"
          >
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </Paper>
    </>
  );
};

export default ContactsTable;
