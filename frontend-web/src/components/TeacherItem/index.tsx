import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import api from '../../services/api';

import { Article } from './styles';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherListProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherListProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    });
  }, []);
  return (
    <Article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>{`R$ ${teacher.cost}`}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`http://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato.
        </a>
      </footer>
    </Article>
  );
};

export default TeacherItem;
