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
  border-radius: 10px;
  padding: 20px;
`;

export const AttentionImage = styled.Image.attrs({
  source: warning,
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

export const QuestionText = styled.Text`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 22px;
  color: #f95f62;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  text-align-vertical: center;
  border-radius: 10px;
`;

export const Panel = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.align ? 'center' : 'space-between')};
  margin: 20px 0;
`;

export const PanelBtn = styled(RectButton)`
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 90px;
  padding: 10px 0;
  background: ${props =>
    props.checked ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 10px;
`;

export const PanelImage = styled.Image`
  width: 32px;
  height: 30px;
`;

export const PanelText = styled.Text`
  font-size: 18px;
  color: ${props => (props.checked ? '#fff' : '#000')};
  text-align: center;
`;

export const PanelInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  width: 60px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  font-size: 32px;
  padding: 0 5px;
  margin: 0 10px;
  text-align: center;
`;

export const SendButton = styled(RectButton).attrs({})`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const SendText = styled.Text`
  width: 100%;
  font-size: 28px;
  color: #f95f62;
  font-weight: bold;
  text-align: center;
`;
