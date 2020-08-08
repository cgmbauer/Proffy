import React, { useCallback, useState } from 'react';

import { Image, Linking } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

import {
  Container,
  Profile,
  AvatarImage,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

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
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherListProps> = ({ teacher, favorited }) => {
  const handleLinkToWhatsapp = useCallback(() => {
    api.post('connection', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, [teacher.whatsapp]);

  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleToogleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      // remover
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      // adicionar

      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited, teacher]);

  return (
    <Container>
      <Profile>
        <AvatarImage source={{ uri: 'https://github.com/cgmbauer.png' }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          {`Preço/hora   `}
          <PriceValue>{`R$ ${teacher.cost}`}</PriceValue>
        </Price>

        <ButtonContainer>
          <FavoriteButton
            onPress={handleToogleFavorite}
            isFavorited={isFavorited}
          >
            {isFavorited ? (
              <Image source={heartOutlineIcon} />
            ) : (
              <Image source={unfavoriteIcon} />
            )}
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
