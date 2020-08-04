import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { PageTeacherList, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form id="search-teacher">
          <div className="input-block">
            <label htmlFor="subject"> Matéria </label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day"> Dia da semana </label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time"> Hora </label>
            <input type="text" id="time" />
          </div>
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </PageTeacherList>
  );
};

export default TeacherList;
