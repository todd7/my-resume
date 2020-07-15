import styled from 'styled-components';
import { shade, tint } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5vh 17.5vh minmax(67.5vh, auto) 10vh;
  grid-template-areas:
    't'
    'h'
    'm'
    'f';

  @media (max-width: 1080px) {
    grid-template-rows: 5vh 15vh minmax(70vh, auto) 10vh;
  }
`;

export const Theme = styled.div`
  grid-area: t;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-right: 20px;

  button {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    border: 0;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    width: 78px;
    height: 34px;

    &:hover {
      color: ${props =>
        props.theme.name === 'light'
          ? shade(0.4, props.theme.colors.primary)
          : tint(0.6, props.theme.colors.primary)};
    }
  }
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
  align-items: center;

  max-width: 816px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.secundary};
  border-top: 3px solid ${props => props.theme.colors.accent};
  border-bottom: 3px solid ${props => props.theme.colors.accent};
  padding: 40px;

  img {
    width: 142px;
    height: 142px;
    border-radius: 50%;
  }

  p {
    color: ${props => props.theme.colors.dark};
    font-size: min(18px, 4vw);
    margin-top: 30px;
    letter-spacing: 4px;
    position: relative;
  }

  p:before {
    position: absolute;
    content: '';
    left: 27.5%;
    top: 50%;
    height: 25px;
    width: 45%;
    border-bottom: 2px solid ${props => props.theme.colors.dark};
  }
`;

export const Description = styled.section`
  margin: 60px 0 25px 0;
  text-align: justify;
  font-size: min(16px, 4vw);
  font-weight: 500;
  line-height: 1.8;
`;

export const Contacts = styled.section`
  width: 100%;

  ul {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;

      font: 14px Roboto Slab, serif;
      font-weight: 400;
      background: ${props => props.theme.colors.primary};
      padding: 10px;
      border-radius: 5px;
      transition: transform 0.2;

      &:hover {
        transform: translate(10px);
      }

      & + li {
        margin-top: 5px;
      }

      svg {
        margin-right: 10px;
        color: ${props => props.theme.colors.text};
      }
    }
  }
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
