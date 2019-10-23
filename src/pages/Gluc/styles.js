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

export const Panel = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100px;
  margin: 10px 0;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const GlucImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const GlucText = styled.Text`
  width: 100px;
  font-size: 20px;
  color: #000;
  text-align: center;
  max-width: 50%;
`;
