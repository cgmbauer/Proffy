import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoritedProps {
  isFavorited: boolean;
}

export const Container = styled.View`
  background-color: #fff;

  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;

  margin-bottom: 16px;

  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 24px;
`;

export const AvatarImage = styled.Image`
  width: 64px;
  height: 64px;

  border-radius: 32px;

  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 28px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6188;
  font-size: 12px;

  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafaf6;
  padding: 24px;

  align-items: center;

  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6188;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<FavoritedProps>`
  ${props =>
    props.isFavorited
      ? css`
          background-color: #8257e5;
        `
      : css`
          background-color: #e33d3d;
        `}

  width: 56px;
  height: 56px;

  margin-right: 8px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;

  width: 56px;
  height: 56px;

  margin-right: 8px;

  border-radius: 8px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
