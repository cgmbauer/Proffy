import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.colorTextInPrimary};

  background: ${colors.colorPrimary};
`;

export const Container = styled.div`
  width: 90vw;
  max-width: 700px;

  div {
    text-align: center;
    margin-bottom: 3.2rem;

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
    }

    img.logo {
      height: 10rem;
    }
  }

  img.hero-image {
    width: 100%;
  }

  span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    div {
      grid-area: logo;
      align-self: center;
      margin: 0;
      text-align: left;

      img {
        height: 100%;
      }

      h2 {
        text-align: initial;
        font-size: 3rem;
      }
    }

    img.hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: buttons;
    }

    span {
      grid-area: total;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    color: ${colors.colorButtonText};
    font: 700 2rem 'Archivo';

    width: 30rem;
    height: 9rem;

    border-radius: 0.8rem;

    &:first-child {
      margin-right: 1.6rem;
    }

    &.study {
      background: ${colors.colorPrimaryLighter};

      transition: background-color 0.2s;

      &:hover {
        background: ${colors.colorPrimaryLight};
      }
    }

    &.give-classes {
      background: ${colors.colorSecundary};

      transition: background-color 0.2s;

      &:hover {
        background: ${colors.colorSecundaryDark};
      }
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    justify-self: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;
