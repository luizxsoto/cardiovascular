import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import image from '~/assets/images/mesaMedico.jpg';
import cardiogram from '~/assets/images/cardiogram.png';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.1 },
  source: image,
  blurRadius: 0.5,
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 20%;
  background: rgba(255, 0, 0, 0.5);
`;

export const Panel = styled.View`
  width: 100%;
  align-items: ${props => (props.pos ? 'flex-start' : 'center')};
  justify-content: center;
`;

export const Label = styled.Text`
  margin: 10px 0;
  padding: 0 10px;
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  height: 40px;
  width: 100%;
  font-size: 20px;
  padding: 0px;
  background: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  border-bottom-color: #f00;
`;

export const LogoImage = styled.Image.attrs({
  source: cardiogram,
})`
  width: 64px;
  height: 64px;
`;

export const LogoText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const SignBtn = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.background ? props.background : 'transparent')};
  border-width: 1px;
  border-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
`;

export const SignBtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : '#fff')};
`;
