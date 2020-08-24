import React, { useContext } from 'react';
import {
  FaSun,
  FaMoon,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Theme,
  Header,
  Main,
  Description,
  Contacts,
  Footer,
} from './styles';

import profile from '../../assets/img/profile.png';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const Home: React.FC<Props> = ({ toggleTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <Container>
      <Theme>
        <button type="submit" onClick={toggleTheme}>
          {name === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </Theme>

      <Header>
        <h1>ABOUT ME</h1>
      </Header>

      <Main>
        <img src={profile} alt="Avatar" />

        <p>Full Stack Developer</p>

        <Description>
          A long time ago in a galaxy no far, the young padawan Edson begins its
          journey to become a master Jedi in Development Full Stack. Having
          mastered Angular, now he goes in search of knowledge of Node Js,
          Express and MongoDB technologies.
        </Description>

        <Contacts>
          <ul>
            <li>
              <FaEnvelope />
              edson_a@outlook.com
            </li>

            <li>
              <FaLinkedin />
              linkedin.com/in/edsonantjunior
            </li>

            <li>
              <FaGithub />
              github.com/todd7
            </li>

            <li>
              <FaTwitter />
              @todd7n
            </li>

            <li>
              <FaMapMarkerAlt />
              Florianópolis, SC - Brazil
            </li>
          </ul>
        </Contacts>
      </Main>

      <Footer>
        <small>2020 @ EDSON JUNIOR</small>
      </Footer>
    </Container>
  );
};

export default Home;
