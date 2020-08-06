import React, { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/icons/warning.svg';

import { PageTeacherForm, Main, ScheduleItem } from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }, [scheduleItems]);

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .post('/classes', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso!');
          history.push('/');
        })
        .catch(() => {
          alert('Erro no cadastro.');
        });
    },
    [avatar, bio, cost, name, subject, whatsapp, scheduleItems],
  );

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend> Seus Dados </legend>

            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />

            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={e => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend> Sobre a aula </legend>

            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Física', label: 'Física' },
                { value: 'Química', label: 'Química' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Inglês', label: 'Inglês' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Redação', label: 'Redação' },
              ]}
            />

            <Input
              label="Custo da sua hora/aula. "
              name="cost"
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, 'week_day', e.target.value)}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-Feira' },
                    { value: '2', label: 'Terça-Feira' },
                    { value: '3', label: 'Quarta-Feira' },
                    { value: '4', label: 'Quinta-Feira' },
                    { value: '5', label: 'Sexta-Feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />

                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>

        <PageTeacherForm />
      </Main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
