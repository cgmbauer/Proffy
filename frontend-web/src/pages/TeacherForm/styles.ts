import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100vw;
    height: 100%;
  }
`;

export const Main = styled.main`
  background: ${colors.colorBoxBase};

  width: 100%;
  max-width: 74rem;

  margin: -2.5rem auto 3.2rem;
  padding-top: 6.4rem;

  border-radius: 0.8rem;

  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }

    legend {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;

      font: 700 2.4rem 'Archivo';
      color: ${colors.colorTextTitle};

      border-bottom: 1px solid ${colors.colorLineInWhite};

      button {
        background: none;
        border: 0;
        color: ${colors.colorPrimary};
        font: 700 1.6rem 'Archivo';
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: ${colors.colorPrimaryDark};
        }
      }
    }

    label {
      color: ${colors.colorTextComplement};
    }

    .input-block + .input-block {
      margin-top: 2.4rem;
    }

    .input-block + .textarea-block {
      margin-top: 2.4rem;
    }

    .select-block + .input-block {
      margin-top: 2.4rem;
    }

    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }
  }

  footer {
    padding: 4rem 2.4rem;
    margin-top: 6.4rem;

    background: ${colors.colorBoxFooter};

    border-top: 1px solid ${colors.colorLineInWhite};

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${colors.colorTextComplement};

      img {
        margin-right: 2rem;
      }
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
    }

    @media (min-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 4rem 6.4rem;

      p {
        justify-content: space-between;
      }

      button {
        margin-top: 0;

        width: 20rem;
      }
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;

    .input-block {
      margin-top: 0 !important;
    }
  }
`;
