import { StyledH1, StyledMain, StyledText } from './Home.styled';

const Home = () => {
  return (
    <StyledMain>
      <StyledH1>Welcome to the Phonebook!</StyledH1>
      <StyledText>
        Create your unique phone book now and find peace of mind, knowing that
        your contacts are always protected and accessible whenever you require
        them.
      </StyledText>
    </StyledMain>
  );
};

export default Home;
