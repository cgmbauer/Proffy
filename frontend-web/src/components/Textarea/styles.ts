import styled from 'styled-components';
import colors from '../../styles/colors';

export const TextareaContainer = styled.div`
  position: relative;

  label {
    color: ${colors.colorTextInPrimary};
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;

    font: 1.6rem 'Archivo';

    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;

    border: 1px solid ${colors.colorLineInWhite};
    border-radius: 0.8rem;
    outline: 0;

    background: ${colors.colorInputBackground};

    resize: vertical;
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
    bottom: 7px;
  }
`;
