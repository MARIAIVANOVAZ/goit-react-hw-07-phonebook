import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      console.log(state);
      console.log(action);
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
      console.log(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },

  // addPhone: {
  //   reducer: (state, action) => {
  //     state.push(action.payload);
  //     console.log(action);
  //   },
  //   prepare: text => {
  //     const id = nanoid();
  //     return { payload: { id, text } };
  //   },
  // },
});

// Action creators are generated for each case reducer function
export const { addContacts, deleteContact, changeFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;
