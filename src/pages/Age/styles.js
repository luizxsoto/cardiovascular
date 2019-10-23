import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.3 },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #eee;
`;

export const AgeBtn = styled(RectButton).attrs({})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 15%;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const AgeImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const AgeText = styled.Text`
  font-size: 20px;
  color: #000;
  text-align: center;
  max-width: 50%;
`;
