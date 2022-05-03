import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContacts } from '../redux/valueSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(event.target);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (e.currentTarget.elements.name.value.trim() === '') {
      return;
    }
    const doubleContact = contacts.find(contact =>
      contact.name
        .toLowerCase()
        .includes(e.currentTarget.elements.name.value.toLowerCase())
    );

    if (doubleContact) {
      alert(`${doubleContact.name} is already in contacts`);
      return;
    } else {
      dispatch(addContacts({ name, number }));
    }
    // contacts.find(contact =>
    //   contact.name
    //     .toLowerCase()
    //     .includes(e.currentTarget.elements.name.value.toLowerCase())
    //     ? alert(` is already in contacts`)
    //     : dispatch(addContacts({ name, number }))
    // );

    // dispatch(addContacts({ name, number }));

    console.log(e.currentTarget.elements.name.value);

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contacts</button>
    </form>
  );
}
