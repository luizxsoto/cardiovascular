import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';
import height from '~/assets/images/height.png';

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

export const QuestionImage = styled.Image.attrs({
  source: height,
})`
  width: 150px;
  height: 150px;
`;

export const QuestionText = styled.Text`
  width: 90%;
  height: 70px;
  text-align: center;
  font-size: 28px;
  color: #f95f62;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  text-align-vertical: center;
  margin: 20px 0;
  border-radius: 10px;
`;

export const Panel = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 70px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const PanelInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
  placeholderTextColor: '#eee',
})`
  text-align: center;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 5px;
  font-size: 32px;
  padding: 0;
  margin: 0;
  font-family: Calculator;
`;

export const SendButton = styled(RectButton).attrs({})`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 20px;
`;

export const SendText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #f95f62;
  text-align: center;
`;
