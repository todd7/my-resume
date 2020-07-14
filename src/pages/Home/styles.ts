import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5vh 17.5vh minmax(67.5vh, auto) 10vh;
  grid-template-areas:
    't'
    'h'
    'm'
    'f';
`;

export const Theme = styled.div`
  grid-area: t;
`;

export const Header = styled.header`
  grid-area: h;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.light};
    font-size: min(72px, 14vw);
    font-weight: 700;
  }
`;

export const Main = styled.main`
  grid-area: m;

  display: flex;
  flex-direction: column;

  max-width: 964px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.secundary};
  border-top: 3px solid ${props => props.theme.colors.accent};
  border-bottom: 3px solid ${props => props.theme.colors.accent};
  padding: 40px;
`;

export const Footer = styled.footer`
  grid-area: f;

  display: flex;
  align-items: center;
  justify-content: center;

  small {
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
  }
`;
