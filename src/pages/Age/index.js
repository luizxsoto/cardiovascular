import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import { Container, AgeBtn, AgeImage, AgeText } from './styles';
import image from '~/assets/images/mesaMedico.jpg';
import jovemM from '~/assets/images/jovemM.png';
import jovemF from '~/assets/images/jovemF.png';
import adultoM from '~/assets/images/adultoM.png';
import adultoF from '~/assets/images/adultoF.png';
import velhoM from '~/assets/images/velhoM.png';
import velhoF from '~/assets/images/velhoF.png';
import idosoM from '~/assets/images/idosoM.png';
import idosoF from '~/assets/images/idosoF.png';

export default function Age({ navigation }) {
  const dispatch = useDispatch();

  function handleSubmit(response) {
    dispatch(UserCreators.changeAge(response));
    navigation.navigate('GenderHeightWeight');
  }

  return (
    <Container source={image}>
      <AgeBtn onPress={() => handleSubmit(28)}>
        <AgeImage source={jovemM} />
        <AgeText>Menos do que 29 anos</AgeText>
        <AgeImage source={jovemF} />
      </AgeBtn>
      <AgeBtn onPress={() => handleSubmit(39)}>
        <AgeImage source={adultoM} />
        <AgeText>Entre 29 a 40 anos</AgeText>
        <AgeImage source={adultoF} />
      </AgeBtn>
      <AgeBtn onPress={() => handleSubmit(50)}>
        <AgeImage source={velhoM} />
        <AgeText>Entre 41 a 64 anos</AgeText>
        <AgeImage source={velhoF} />
      </AgeBtn>
      <AgeBtn onPress={() => handleSubmit(65)}>
        <AgeImage source={idosoM} />
        <AgeText>Mais do que 64 anos</AgeText>
        <AgeImage source={idosoF} />
      </AgeBtn>
    </Container>
  );
}

Age.navigationOptions = {
  title: 'Idade',
};
