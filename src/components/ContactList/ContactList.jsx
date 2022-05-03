import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FilteredContacts from 'components/Filter/FilteredContcts';

export default function ContactList() {
  const contacts = useSelector(state => FilteredContacts(state));

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.array,
};
