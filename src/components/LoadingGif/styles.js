import styled from 'styled-components/native';
import image from '~/assets/images/mesaMedico.jpg';
import loadingGif from '~/assets/images/loadingGif.gif';

export const Container = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.1 },
  source: image,
  blurRadius: 0.5,
})`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
`;

export const Loading = styled.Image.attrs({
  source: loadingGif,
})`
  width: 403px;
  height: 550px;
`;
