import { P, Div, ButtonDelete } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Div>
      <P>
        {name}: {number}
      </P>
      <ButtonDelete
        aria-label="Delete"
        onClick={handleDelete}
        disableBackground
      >
        <DeleteIcon fontSize="small" />
      </ButtonDelete>
    </Div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
