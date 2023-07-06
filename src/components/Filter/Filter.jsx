import { DivWrapper, FinedLabel, InputFilter } from './Filter.styled';
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
      <FinedLabel>
        Fined contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </FinedLabel>
    </DivWrapper>
  );
};

export default Filter;
