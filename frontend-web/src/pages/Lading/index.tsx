import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import { ButtonContainer, Container, PageLanding } from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <Container className="container">
        <div>
          <img src={logoImg} alt="Proffy logo" className="logo" />
          <h2> Sua plataforma de estudos online. </h2>
        </div>

        <img
          src={landingImg}
          alt="plataforma de estudos"
          className="hero-image"
        />

        <ButtonContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-class" className="give-classes">
            <img src={giveClassesIcon} alt="Dê aulas" />
            Estudar
          </Link>
        </ButtonContainer>

        <span>
          Total de 200 conexões já realizadas.
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </Container>
    </PageLanding>
  );
};

export default Landing;
