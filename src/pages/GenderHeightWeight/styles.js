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

export const GenderBtn = styled(RectButton).attrs({})`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70%;
  margin: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const GenderImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const GenderText = styled.Text`
  font-size: 20px;
  color: ${props => (props.color ? '#000' : '#fff')};
  text-align: center;
  max-width: 50%;
`;

export const Input = styled.TextInput.attrs({
  keyboardType: 'numeric',
  placeholderTextColor: '#eee',
})`
  text-align: center;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 5px;
  font-size: 25px;
  padding: 0;
  font-family: Calculator;
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
