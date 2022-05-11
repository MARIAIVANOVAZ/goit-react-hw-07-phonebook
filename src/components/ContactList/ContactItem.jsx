import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'components/redux/contactsApi';

// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'components/redux/valueSlice';

const ContactItem = ({ contact: { id, name, number } }) => {
  // const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.object,
};
export default ContactItem;
