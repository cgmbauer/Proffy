import React, { useState, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToogleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(!isFiltersVisible);
  }, [isFiltersVisible]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [convertedWeekDay, setConvertedWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const [favorites, setFavorites] = useState<number[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          },
        );

        setFavorites(favoritedTeachersId);
      }
    });
  }, []);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    switch (week_day) {
      case 'Domingo':
        setConvertedWeekDay('0');
        break;
      case 'Segunda-Feira':
        setConvertedWeekDay('1');
        break;
      case 'Terça-Feira':
        setConvertedWeekDay('2');
        break;
      case 'Quarta-Feira':
        setConvertedWeekDay('3');
        break;
      case 'Quinta-Feira':
        setConvertedWeekDay('4');
        break;
      case 'Sexta-Feira':
        setConvertedWeekDay('5');
        break;
      case 'Sábado':
        setConvertedWeekDay('6');
        break;
      default:
        '';
    }
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: convertedWeekDay,
        time,
      },
    });

    const teachersList = response.data;

    setTeachers(teachersList);

    setIsFiltersVisible(false);
  }, [convertedWeekDay, loadFavorites, subject, time, week_day]);

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <>
            <SearchForm>
              <Label>Matéria</Label>
              <Input
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
                value={subject}
                onChangeText={text => setSubject(text)}
              />

              <InputGroup>
                <InputBlock>
                  <Label>Dia da Semana</Label>
                  <Input
                    placeholder="Qual o dia?"
                    placeholderTextColor="#c1bccc"
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                  />
                </InputBlock>

                <InputBlock>
                  <Label>Horário</Label>
                  <Input
                    placeholder="Qual horário?"
                    placeholderTextColor="#c1bccc"
                    value={time}
                    onChangeText={text => setTime(text)}
                  />
                </InputBlock>
              </InputGroup>

              <SubmitButton onPress={handleFiltersSubmit}>
                <SubmitButtonText>Filtrar</SubmitButtonText>
              </SubmitButton>
            </SearchForm>
          </>
        )}
      </PageHeader>
      <Scroll
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </Scroll>
    </Container>
  );
};

export default TeacherList;
