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

export const Case = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  background: #fff;
  border-top-right-radius: 50px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 25px;
  elevation: 10;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  background: #eee;
  border-top-right-radius: 25px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-width: 0.5px;
  border-color: #999;
  margin-top: 20px;
`;

export const Painel = styled.View`
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 250px;
  background: #e5e9ce;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #999;
  margin-top: 10px;
`;

export const PainelInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  width: 90%;
  height: 35%;
  font-size: 70px;
  text-align: right;
  background: #eee;
  padding: 0 5px;
  margin: 5px 0;
  justify-content: center;
  align-items: flex-end;
  font-family: Calculator;
`;

export const CenterRow = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CenterButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background: #999;
  margin-left: 10px;
`;

export const CaseRow = styled.View`
  flex-direction: row;
  width: 70%;
  align-items: center;
  justify-content: space-between;
`;

export const BtnBack = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #999;
  margin: 10px 0;
  border-radius: 25px;
`;

export const BtnOk = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  background: #4e5975;
  margin: 10px 0;
  border-radius: 50px;
`;

export const BtnText = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 2;
  padding: 0;
`;
