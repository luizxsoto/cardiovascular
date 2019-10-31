import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';
import warning from '~/assets/images/warning.png';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.1 },
  source: imageBackground,
  blurRadius: 0.5,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #eee;
`;

export const Attention = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
`;

export const AttentionRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const AttentionImage = styled.Image.attrs({
  source: warning,
})`
  width: 150px;
  height: 150px;
`;

export const AttentionTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const AttentionMessage = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 5px;
`;

export const AttentionButton = styled(RectButton)`
  background: #49b1e9;
  margin: 20px 0;
  border-radius: 5px;
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

export const CholesterolImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const CholesterolText = styled.Text`
  width: 100px;
  font-size: 20px;
  color: #000;
  text-align: center;
  max-width: 50%;
`;
