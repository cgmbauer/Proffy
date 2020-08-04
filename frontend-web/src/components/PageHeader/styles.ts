import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${colors.colorPrimary};

  div.top-bar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    margin: 0 auto;
    padding: 1.6rem 0;

    color: ${colors.colorTextInPrimary};

    a {
      height: 3.2rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 1.6rem;
    }
  }

  div.header-content {
    width: 90%;

    margin: 3.2rem auto;

    position: relative;

    strong {
      font: 700 3.6rem 'Archivo';
      line-height: 4.2rem;
      color: ${colors.colorTitleInPrimary};
    }
  }

  @media (min-width: 700px) {
    height: 300px;

    div.top-bar-container {
      max-width: 1100px;
    }

    div.header-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;

      strong {
        max-width: 350px;
      }
    }
  }
`;
