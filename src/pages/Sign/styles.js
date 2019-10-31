import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import image from '~/assets/images/mesaMedico.jpg';
import cardiogram from '~/assets/images/cardiogram.png';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.1 },
  source: image,
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 20%;
  padding-bottom: 10%;
  background: rgba(255, 0, 0, 0.5);
`;

export const Logo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
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
