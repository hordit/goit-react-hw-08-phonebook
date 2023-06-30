import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <main>
        <section title="Phonebook">
        <h1>Your phonebook</h1>
          <ContactForm />
        </section>
        <section title="Contacts">
        <h2>Contacts</h2>
          <Filter />
          {isLoading && <Loader />}
          <ContactList />
        </section>
      </main>
    </div>
  );
};

export default Contacts;
