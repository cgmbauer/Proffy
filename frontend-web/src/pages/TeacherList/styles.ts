import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-block: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -28px;
  }

  div {
    position: relative;

    label {
      color: ${colors.colorTextInPrimary};
      font-size: 1.4rem;
    }

    input {
      width: 100%;
      height: 5.6rem;

      font: 1.6rem 'Archivo';

      margin-top: 0.8rem;
      padding: 0 1.6rem;

      border: 1px solid ${colors.colorLineInWhite};
      border-radius: 0.8rem;
      outline: 0;

      background: ${colors.colorInputBackground};
    }

    & + div {
      margin-top: 1.4rem;
    }

    @media (min-width: 700px) {
      & + div {
        margin-top: 0;
      }
    }

    &:focus-within::after {
      content: '';

      width: calc(100% - 3.2rem);
      height: 2px;

      background: ${colors.colorPrimaryLight};

      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
