import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Creators as AuthCreators } from '~/store/ducks/auth';

import LoadingGif from '~/components/LoadingGif';
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

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);
  const user = useSelector(state => state.user);
  const [name, setName] = useState(user.user.name);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const schema = Yup.object().shape({
    name: Yup.string().required('É necessário preencher o campo nome'),
    email: Yup.string()
      .email('Preencha um e-mail válido')
      .required('É necessário preencher o campo e-mail'),
    password: Yup.string()
      .required('É necessário preencher o campo senha')
      .min(6, 'Sua senha deve ter pelo menos 6 caracteres'),
  });

  async function handleSignUp() {
    await schema
      .validate({ name, email, password })
      .then(res => {
        dispatch(
          AuthCreators.signUpRequest(
            name,
            email,
            password,
            user.age,
            user.gender,
            user.height,
            user.weight,
            user.systolic,
            user.diastolic,
            user.cholesterol,
            user.gluc,
            user.smoke,
            user.alco,
            user.active,
            user.score
          )
        );
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
    <>
      {loading ? (
        <LoadingGif />
      ) : (
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
              placeholder="Digite seu nome"
              value={name}
              onChangeText={text => setName(text)}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <Input
              placeholder="Digite seu e-mail"
              ref={emailRef}
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
              onSubmitEditing={() => handleSignUp()}
            />
          </Panel>
          <Panel>
            <SignBtn background="#fff" onPress={() => handleSignUp()}>
              <SignBtnText color="rgba(255, 0, 0, 0.7)">Cadastrar</SignBtnText>
            </SignBtn>
            <SignBtn onPress={() => navigation.navigate('SignIn')}>
              <SignBtnText>Ja pussuo conta</SignBtnText>
            </SignBtn>
          </Panel>
        </Container>
      )}
    </>
  );
}

SignUp.navigationOptions = {
  header: null,
};
