import { Contact } from 'components/Contact/Contact';
import { Li, Ul } from './ContactList.slyled';
import { useSelector } from 'react-redux';
import { selectError, selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  return (
    <>
      {error && <div>{error}</div>}
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
