import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Creators as AuthCreators } from '~/store/ducks/auth';

import {
  Container,
  BackBtn,
  Panel,
  Label,
  Input,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignUp() {
    if (name && email && password) {
      dispatch(AuthCreators.signUpRequest(name, email, password, navigation));
    } else {
      Alert.alert(
        'Preencha todos campos',
        'É necessário o preenchimento de todos campos para finalizar o cadastro',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
    }
  }

  return (
    <Container>
      <BackBtn onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={30} color="#fff" />
      </BackBtn>
      <Panel>
        <LogoImage />
        <LogoText>Higia</LogoText>
      </Panel>
      <Panel pos>
        <Label>Nome</Label>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Label>E-mail</Label>
        <Input
          ref={emailRef}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Label>Password</Label>
        <Input
          ref={passwordRef}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          returnKeyType="send"
          onSubmitEditing={() => handleSignUp()}
        />
      </Panel>
      <Panel>
        <SignBtn background="#fff" onPress={handleSignUp}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">Cadastrar</SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

SignUp.navigationOptions = {
  header: null,
};
