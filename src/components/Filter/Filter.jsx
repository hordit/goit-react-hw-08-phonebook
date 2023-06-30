import { DivWrapper, InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <DivWrapper>
      <label>
        Fined contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </label>
    </DivWrapper>
  );
};

export default Filter;
