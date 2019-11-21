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
  justify-content: flex-start;
  background: #eee;
`;

export const BestScore = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const BestScoreBtn = styled(RectButton)`
  width: 60px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${props => (props.color ? '#49b1e9' : '#f95f62')};
`;

export const BestScoreBtnText = styled.Text`
  text-align: center;
`;

export const BestScoreSeparator = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BestScoreLabel = styled.Text``;

export const BestScoreValue = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const UserInfo = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background: #f95f62;
`;

export const UserNameLabel = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
`;

export const UserNameValue = styled.Text.attrs({})`
  width: 100%;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

export const ListQuiz = styled.FlatList.attrs({
  windowSize: 2,
  contentContainerStyle: {
    padding: 2,
  },
})`
  width: 100%;
  padding: 10px;
`;

export const ItemQuiz = styled(RectButton)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 5px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  elevation: 2;
`;

export const ItemText = styled.Text`
  font-size: 18px;
`;
