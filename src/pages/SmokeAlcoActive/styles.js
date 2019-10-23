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

export const ResponseBtn = styled(RectButton).attrs({})`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const ResponseImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ResponseText = styled.Text`
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
