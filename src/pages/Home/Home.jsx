import { StyledH1, StyledMain, StyledText, StyledVideo } from './Home.styled';
import videoBackground from '../../video/video-background.mp4';

const Home = () => {
  return (
    <StyledMain>
      <StyledVideo autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </StyledVideo>
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