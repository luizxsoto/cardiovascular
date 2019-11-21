import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';

import { Creators as AuthCreators } from '~/store/ducks/auth';

import {
  Container,
  BackBtn,
  Panel,
  Input,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const passwordRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Preencha um e-mail válido')
      .required('É necessário preencher o campo e-mail'),
    password: Yup.string()
      .required('É necessário preencher o campo senha')
      .min(6, 'Sua senha deve ter pelo menos 6 caracteres'),
  });

  async function handleSignIn() {
    await schema
      .validate({ email, password })
      .then(res => {
        dispatch(AuthCreators.signInRequest(email, password));
      })
      .catch(err =>
        Alert.alert(
          'Preencha todos campos corretamente',
          err.message,
          [{ text: 'OK' }],
          {
            cancelable: false,
          }
        )
      );
  }

  return (
    <Container>
      <BackBtn onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={30} color="#fff" />
      </BackBtn>
      <Panel>
        <LogoImage />
        <LogoText>Dr. Ricardio</LogoText>
      </Panel>
      <Panel pos>
        <Input
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          placeholder="Digite sua senha"
          ref={passwordRef}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          returnKeyType="send"
          onSubmitEditing={() => handleSignIn()}
        />
      </Panel>
      <Panel>
        <SignBtn background="#fff" onPress={handleSignIn}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">
            {loading ? 'Aguarde ...' : 'Entrar'}
          </SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

SignIn.navigationOptions = {
  header: null,
};
