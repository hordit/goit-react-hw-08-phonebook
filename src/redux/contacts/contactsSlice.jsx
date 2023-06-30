import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const pendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fetchContactsFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const addContactFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const deleteContactFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

// const patchContactFulfilledReducer = (state, {payload}) => {
// state.isLoading = false;
// state.error = null;
// state.items = state.items.map(item => item.id === payload.id ? payload : item);
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
