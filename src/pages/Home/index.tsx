import React from 'react';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiMapPin,
} from 'react-icons/fi';

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

const Home: React.FC = () => {
  return (
    <Container>
      <Theme>
        <button type="submit">Dark</button>
      </Theme>

      <Header>
        <h1>ABOUT ME</h1>
      </Header>

      <Main>
        <img src={profile} alt="Avatar" />

        <p>Full Stack Developer</p>

        <Description>
          Hello, my name is Edson and I’m 24 years old and that’s my resume. For
          a long time I went Web Developer, but now I am in new journey to
          become one Full Stack Developer.
        </Description>

        <Contacts>
          <ul>
            <li>
              <FiMail />
              edson_a@outlook.com
            </li>

            <li>
              <FiLinkedin />
              linkedin.com/in/edsonantjunior
            </li>

            <li>
              <FiGithub />
              github.com/todd7
            </li>

            <li>
              <FiTwitter />
              @todd7n
            </li>

            <li>
              <FiMapPin />
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
