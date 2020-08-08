import React, { useCallback, ReactNode } from 'react';
import { Image } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/logo.png';

import { Container, TopBar, Title, Header } from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.navigate('Landing');
  }, [navigation]);
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
