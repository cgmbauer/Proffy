import styled from 'styled-components';
import colors from '../../styles/colors';

export const Article = styled.article`
  background: ${colors.colorBoxBase};

  border: 1px solid ${colors.colorLineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    display: flex;
    align-items: center;

    padding: 3.2rem 2rem;

    img {
      width: 8rem;
      height: 8rem;

      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font: 700 2.4rem 'Archivo';

        display: block;

        color: ${colors.colorTextTitle};
      }

      span {
        font: 1.6rem;

        display: block;

        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;

    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.2rem 2rem;
    margin-top: 3.2rem;

    background: ${colors.colorBoxFooter};

    border-top: 1px solid ${colors.colorLineInWhite};

    p {
      strong {
        color: ${colors.colorPrimary};
        font-size: 1.6rem;

        display: block;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 20rem;
      height: 5.6rem;

      font: 700 1.4rem 'Archivo';
      color: ${colors.colorButtonText};
      background: ${colors.colorSecundary};

      border: 0;
      border-radius: 0.8rem;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background: ${colors.colorSecundaryDark};
      }
    }
  }

  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }

    > p {
      padding: 0 3.2rem;
    }

    footer {
      p {
        strong {
          display: initial;

          margin-left: 1.6rem;
        }
      }

      button {
        width: 24.5rem;

        font-size: 1.6rem;

        justify-content: center;

        img {
          margin-right: 1.6rem;
        }
      }
    }
  }
`;
