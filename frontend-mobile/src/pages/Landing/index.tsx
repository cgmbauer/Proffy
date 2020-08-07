import React from 'react';

import { Image } from 'react-native';

import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

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
  return (
    <Container>
      <LandingImage source={landingImg} />

      <Title>
        Seja bem vindo.
        {'\n'}
        <TextBold> O que deseja fazer?</TextBold>
      </Title>

      <ButtonContainer>
        <ButtonPrimary>
          <Image source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary>
          <Image source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonContainer>

      <ConnectionsText>
        {`Total de 285 conexões já realizadas.  `}
        <Image source={heartIcon} />
      </ConnectionsText>
    </Container>
  );
};

export default Landing;
