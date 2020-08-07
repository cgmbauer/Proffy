import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const LandingImage = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #fff;
  font-size: 20px;
  line-height: 30px;

  margin-top: 80px;
`;

export const TextBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
`;

const Button = css`
  justify-content: space-between;
  height: 150px;
  width: 48%;

  background-color: #333;

  border-radius: 8px;

  padding: 24px;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  ${Button};
  background-color: #9871f5;
`;

export const ButtonText = styled.Text`
  font-family: 'Archive_700bold';
  color: #fff;
  font-size: 20px;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  ${Button};
  background-color: #04d361;
`;

export const ConnectionsText = styled.Text`
  max-width: 140px;

  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;

  margin-top: 40px;
`;
