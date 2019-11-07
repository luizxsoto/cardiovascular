import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';

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
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Panel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;
  margin: 10px 0;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const PanelBtn = styled(RectButton).attrs({})`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23%;
  height: 70%;
  background: ${props =>
    props.checked ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 10px;
`;

export const PanelImage = styled.Image`
  width: 48px;
  height: 45px;
`;

export const PanelText = styled.Text`
  font-size: 20px;
  color: #000;
  text-align: center;
  max-width: 50%;
`;

export const SendButton = styled(RectButton).attrs({})`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const SendText = styled.Text`
  width: 100%;
  font-size: 28px;
  color: #fff;
  text-align: center;
`;
