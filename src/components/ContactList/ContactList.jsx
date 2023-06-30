import { Contact } from 'components/Contact/Contact';
import { Li, Ul } from './ContactList.slyled';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <Loader />}
      <Ul>
        {filtredContacts.map(contact => (
          <Li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </Li>
        ))}
      </Ul>
    </>
  );
};
