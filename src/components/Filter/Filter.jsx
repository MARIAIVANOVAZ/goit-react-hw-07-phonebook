import { changeFilter } from 'components/redux/valueSlice';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const changedFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filterValue} onChange={changedFilter} />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
// export   filteredContacts ;
export default Filter;
