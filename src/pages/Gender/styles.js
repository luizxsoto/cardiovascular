import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';
import gender from '~/assets/images/gender.png';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.1 },
  source: imageBackground,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #eee;
`;

export const QuestionImage = styled.Image.attrs({
  source: gender,
})`
  width: 150px;
  height: 150px;
  margin-bottom: 10%;
`;

export const QuestionText = styled.Text`
  width: 90%;
  height: 80px;
  text-align: center;
  font-size: 28px;
  color: #f95f62;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  text-align-vertical: center;
  border-radius: 5px;
  margin-bottom: 10%;
`;

export const Panel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const PanelBtn = styled(RectButton).attrs({})`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70%;
  margin: 10px;
  background: ${props =>
    props.checked ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 10px;
`;

export const PanelImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const PanelText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f95f62;
  text-align: center;
`;
