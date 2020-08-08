import React, { useCallback, useState, useEffect } from 'react';

import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

import api from '../../services/api';

import {
  Container,
  LandingImage,
  Title,
  TextBold,
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  ConnectionsText,
} from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigation.navigate('GiveClasses');
  }, [navigation]);

  const handleNavigateToStudyPage = useCallback(() => {
    navigation.navigate('Study');
  }, [navigation]);

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getConnections(): Promise<void> {
      const response = await api.get('/connections');

      const { total } = response.data;

      setTotalConnections(total);
    }

    getConnections();
  }, []);

  return (
    <Container>
      <LandingImage source={landingImg} />

      <Title>
        Seja bem vindo.
        {'\n'}
        <TextBold> O que deseja fazer?</TextBold>
      </Title>

      <ButtonContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPage}>
          <Image source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonContainer>

      <ConnectionsText>
        {totalConnections <= 1
          ? `Total de ${totalConnections} conexão já realizada.  `
          : `Total de ${totalConnections} conexões já realizadas.  `}
        <Image source={heartIcon} />
      </ConnectionsText>
    </Container>
  );
};

export default Landing;
