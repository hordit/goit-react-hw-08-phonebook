import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import {
  MainContainer,
  PhonebookTitle,
  SectionContainer,
} from './Contacts.styled';
import CenteredLoader from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <MainContainer>
        <SectionContainer title="Phonebook">
          <PhonebookTitle>Your phonebook</PhonebookTitle>
          <ContactForm />
        </SectionContainer>
        <SectionContainer title="Contacts">
          <PhonebookTitle>Contacts</PhonebookTitle>
          <Filter />
          {isLoading && <CenteredLoader color="#fff" size={80} />}
          <ContactList />
        </SectionContainer>
      </MainContainer>
    </div>
  );
};

export default Contacts;
