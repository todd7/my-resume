import React, { useContext } from 'react';
import {
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

import profile from '../../assets/img/profile.jpg';

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
          {name === 'light' ? 'Dark' : 'Light'}
        </button>
      </Theme>

      <Header>
        <h1>ABOUT ME</h1>
      </Header>

      <Main>
        <img src={profile} alt="Avatar" />

        <p>Full Stack Developer</p>

        <Description>
          Hello, my name is Edson and I’m 24 years old and that’s my resume. For
          a long time I&apos;ve been a Web Developer, but now I am in a new
          journey to become a Full Stack Developer.
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
