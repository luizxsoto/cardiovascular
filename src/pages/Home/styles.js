import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.Text`
  font-size: 28px;
  color: ${props => (props.color ? '#fff' : '#000')};
`;

export const ContainerBtn = styled(RectButton)`
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  margin: 20px 0;
  border-radius: 5px;
`;
