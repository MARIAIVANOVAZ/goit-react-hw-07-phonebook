import React from 'react';

import ContactForm from './СontactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { useGetContactsQuery } from './redux/contactsApi';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2> Contacts</h2>
      <ContactList></ContactList>
      <Filter></Filter>
    </div>
  );
}
