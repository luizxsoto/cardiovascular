import styled from 'styled-components/native';
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

export const ResponsesPanel = styled.View`
  width: 350px;
  height: 250px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  elevation: 1;
  border-radius: 10px;
`;

export const PanelSeparator = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const ResponseText = styled.Text`
  font-size: 16px;
  margin: 5px 0;
`;
