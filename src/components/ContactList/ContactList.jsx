import ContactItem from './ContactItem';
import { useGetContactsQuery } from 'components/redux/contactsApi';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

export default function ContactList() {
  const { data: contacts, isLoading } = useGetContactsQuery();

  // console.log(data);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);

  const getVisibleContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.array,
};
