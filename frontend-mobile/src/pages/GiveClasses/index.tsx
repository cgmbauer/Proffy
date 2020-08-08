import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/give-classes-background.png';

import {
  Container,
  ImageBackground,
  Title,
  Description,
  ButtonContainer,
  ButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <ImageBackground source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </ImageBackground>

      <ButtonContainer onPress={handleNavigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default GiveClasses;
