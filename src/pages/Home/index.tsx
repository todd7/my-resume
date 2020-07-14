import React from 'react';

import { Container, Theme, Header, Main, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Theme>Dark</Theme>

      <Header>
        <h1>ABOUT ME</h1>
      </Header>

      <Main>
        <h1>edson</h1>
        <h1>edson</h1>
        <h1>edson</h1>
        <h1>edson</h1>
        <h1>edson</h1>
        <h1>edson</h1>
      </Main>

      <Footer>
        <small>2020 @ EDSON JUNIOR</small>
      </Footer>
    </Container>
  );
};

export default Home;
