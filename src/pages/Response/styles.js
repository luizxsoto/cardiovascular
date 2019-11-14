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

export const ScoreTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f95f62;
`;

export const ScorePanel = styled.View`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: #f95f62;
  border-radius: 75px;
  elevation: 5;
  margin: 20px 0;
`;

export const ScorePoints = styled.Text`
  font-size: 70px;
  font-weight: bold;
  color: #fff;
`;

export const ScoreLabel = styled.Text`
  color: #fff;
`;

export const ScoreMessageTitle = styled.Text`
  font-size: 32px;
`;

export const ScoreMessage = styled.Text`
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
`;

export const AdviceMessage = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;

export const RowPanel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const BetterScorePanel = styled.View`
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  background: #49b1e9;
  border-radius: 38px;
  elevation: ${props => (props.disp ? '0' : '5')};
`;

export const BetterScorePoints = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const BetterScoreLabel = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const NextButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  background: ${props => (props.disp ? 'transparent' : '#0d0')};
  border-radius: 20px;
  elevation: 5;
`;

export const NextText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;
