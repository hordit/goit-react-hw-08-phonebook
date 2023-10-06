import { Formik } from 'formik';
import {
  ErrorMessageStyled,
  FormStyled,
  InputStyled,
  Label,
} from './ContactForm.styled';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { capitalizedName } from 'utils/capitalizedName';
import { CustomBox } from 'components/CustomElements/CustomForm';
import CustomButton from 'components/CustomElements/CustomButtonPhonebook';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      name: values.name,
      number: values.number,
    };

    const isExistName = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExistName) {
      toast.error(`${capitalizedName(contact.name)} is already in contacts`);
      return resetForm();
    } else {
      dispatch(
        addContact({
          name: capitalizedName(contact.name),
          number: contact.number,
        })
      );
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <ErrorMessageStyled name="name" component="div" />
        <Label>
          Number
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ErrorMessageStyled name="number" component="div" />
        <CustomBox>
          <CustomButton type="submit">Add contact</CustomButton>
        </CustomBox>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
