import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import { Article } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/62662494?s=460&u=e877d46764c4faf49557e4cb6cf1801ebf39d0dd&v=4"
          alt="CGMBAUER"
        />
        <div>
          <strong> CGMBAUER </strong>
          <span> Física </span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </Article>
  );
};

export default TeacherItem;
