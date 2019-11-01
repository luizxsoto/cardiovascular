import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import imageBackground from '~/assets/images/mesaMedico.jpg';
import birthdayCake from '~/assets/images/birthdayCake.png';

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
  source: birthdayCake,
})`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
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
`;

export const Picker = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
`;

export const PickerInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  width: 23%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  text-align-vertical: center;
  font-size: 28px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: #f95f62;
  font-weight: bold;
`;

export const CalendarButton = styled(RectButton).attrs({})`
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
`;

export const SendButton = styled(RectButton).attrs({})`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const SendText = styled.Text`
  width: 100%;
  font-size: 28px;
  color: #f95f62;
  font-weight: bold;
  text-align: center;
`;
