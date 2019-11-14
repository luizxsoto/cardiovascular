import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';
import gender from '~/assets/images/gender.png';
import welcome from '~/assets/images/welcome.png';

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
  border-radius: 10px;
  padding: 20px;
`;

export const AttentionImage = styled.Image.attrs({
  source: welcome,
})`
  width: 150px;
  height: 150px;
`;

export const AttentionTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #fff;
  font-size: 24px;
`;

export const AttentionMessage = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 5px;
`;

export const AttentionButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #49b1e9;
  margin-top: 20px;
  border-radius: 5px;
  width: 150px;
  height: 40px;
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
  height: 70px;
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
  height: 50px;
`;

export const PanelText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f95f62;
  text-align: center;
`;
