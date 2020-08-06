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
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -28px;
  }

  button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 5.6rem;

      margin-top: 3.2rem;

      background: ${colors.colorSecundary};

      font: 700 1.6rem 'Archivo';
      color: ${colors.colorButtonText};
      text-decoration: none;

      border: 0;
      border-radius: 0.8rem;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background: ${colors.colorSecundaryDark};
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
