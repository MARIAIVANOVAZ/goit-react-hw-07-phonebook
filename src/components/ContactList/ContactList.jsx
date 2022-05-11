import ContactItem from './ContactItem';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/contactsApi';

// import { isRejectedWithValue } from '@reduxjs/toolkit';

export default function ContactList() {
  // const rtkQueryErrorLogger = api => next => action => {
  //   // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  //   if (isRejectedWithValue(action)) {
  //     console.warn('We got a rejected action!');
  //     // toast.warn({ title: 'Async error!', message: action.error.data.message });
  //   }

  //   return next(action);
  // };
  // console.log(data);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  const {
    data: contacts = [],
    error,
    isFetching,
    isError,
  } = useGetContactsQuery();
  // console.log(isFetching);
  console.log(isError);
  // console.log(contacts);
  console.log(error);
  //
  // if (isRejectedWithValue) {
  //   console.warn('We got a rejected action!');
  //   alert('We got a rejected action!');
  //   return;
  //   // toast.warn({ title: 'Async error!', message: action.error.data.message });
  // }

  const getVisibleContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  const visibleContacts = getVisibleContacts();
  // console.log(visibleContacts);

  return (
    <>
      <ul>
        {isFetching && <h2>Loading...</h2>}
        {(isError || !visibleContacts) && <h2>{error.data}</h2>}
        {visibleContacts &&
          !isError &&
          visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              // onDelete={deleteContact}
            ></ContactItem>
          ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.array,
};
