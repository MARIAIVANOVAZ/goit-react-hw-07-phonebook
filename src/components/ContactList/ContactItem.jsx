import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'components/redux/contactsApi';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'components/redux/valueSlice';

const ContactItem = ({ contact: { id, name, number } }) => {
  const [deleteContact] = useDeleteContactMutation();
  // const dispatch = useDispatch();

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
  onDelete: PropTypes.func,
  contact: PropTypes.object,
};
export default ContactItem;
