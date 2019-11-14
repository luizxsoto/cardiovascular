import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import normal from '~/assets/images/normal.png';
import acimaNormal from '~/assets/images/acimaNormal.png';
import bemAcimaNormal from '~/assets/images/bemAcimaNormal.png';
import {
  Container,
  Attention,
  AttentionImage,
  AttentionTitle,
  AttentionMessage,
  AttentionButton,
  QuestionText,
  Panel,
  PanelBtn,
  PanelImage,
  PanelText,
  PanelInput,
  SendButton,
  SendText,
} from './styles';

export default function CholGlucPress({ navigation }) {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.user.name);
  const diastolicRef = useRef();
  const [attention, setAttention] = useState(true);
  const [cholesterol, setCholesterol] = useState(-1);
  const [gluc, setGluc] = useState(-1);
  const [systolic, setSystolic] = useState('12');
  const [diastolic, setDiastolic] = useState('8');

  function onChangedSystolic(text) {
    const tempText = text.replace(/[^0-9]/g, '');
    if (parseInt(tempText, 10) <= 20 && tempText) {
      setSystolic(tempText);
      if (tempText.length > 1) diastolicRef.current.focus();
    } else {
      if (tempText) {
        Alert.alert('Sistólica', 'Sistólica máxima 20', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setSystolic('');
    }
  }

  function onChangedDiastolic(text) {
    if (parseInt(text, 10) <= 10 && text) {
      setDiastolic(text.replace(/[^0-9]/g, ''));
    } else {
      if (text) {
        Alert.alert('Diastólica', 'Diastólica máxima 10', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setDiastolic('');
    }
  }

  function handleSubmit() {
    if (cholesterol > 0 && gluc > 0 && systolic && diastolic) {
      dispatch(UserCreators.changeCholesterol(cholesterol));
      dispatch(UserCreators.changeGluc(gluc));
      dispatch(UserCreators.changeSystolic(systolic * 10));
      dispatch(UserCreators.changeDiastolic(diastolic * 10));
      navigation.navigate('Response');
    } else {
      Alert.alert(
        'Incompleto',
        'Selecione ao menos uma resposta para cada pergunta'
      );
    }
  }

  return (
    <Container>
      {attention && (
        <Attention>
          <AttentionImage />
          <AttentionTitle>Atenção, {name.split(' ', 1)[0]}!</AttentionTitle>
          <AttentionMessage>
            As repostas a seguir exigem que você tenha embaseamento clínico
            realizado por exames periódicos e com avaliação médica. Informações
            imprecisas tornarão seu teste imprecioso.
          </AttentionMessage>
          <AttentionButton onPress={() => setAttention(false)}>
            <AttentionMessage>Ciente!</AttentionMessage>
          </AttentionButton>
        </Attention>
      )}
      <QuestionText>Como está seu colesterol?</QuestionText>
      <Panel>
        <PanelBtn checked={cholesterol === 1} onPress={() => setCholesterol(1)}>
          <PanelImage source={normal} />
          <PanelText checked={cholesterol === 1}>Normal</PanelText>
        </PanelBtn>
        <PanelBtn checked={cholesterol === 2} onPress={() => setCholesterol(2)}>
          <PanelImage source={acimaNormal} />
          <PanelText checked={cholesterol === 2}>Acima do normal</PanelText>
        </PanelBtn>
        <PanelBtn checked={cholesterol === 3} onPress={() => setCholesterol(3)}>
          <PanelImage source={bemAcimaNormal} />
          <PanelText checked={cholesterol === 3}>Bem acima do normal</PanelText>
        </PanelBtn>
      </Panel>
      <QuestionText>Como está sua glicose?</QuestionText>
      <Panel>
        <PanelBtn checked={gluc === 1} onPress={() => setGluc(1)}>
          <PanelImage source={normal} />
          <PanelText checked={gluc === 1}>Normal</PanelText>
        </PanelBtn>
        <PanelBtn checked={gluc === 2} onPress={() => setGluc(2)}>
          <PanelImage source={acimaNormal} />
          <PanelText checked={gluc === 2}>Acima do normal</PanelText>
        </PanelBtn>
        <PanelBtn checked={gluc === 3} onPress={() => setGluc(3)}>
          <PanelImage source={bemAcimaNormal} />
          <PanelText checked={gluc === 3}>Bem acima do normal</PanelText>
        </PanelBtn>
      </Panel>
      <QuestionText>Como está sua pressão?</QuestionText>
      <Panel align>
        <PanelInput
          placeholder="'12'"
          maxLength={2}
          value={systolic}
          returnKeyType="next"
          onSubmitEditing={() => diastolicRef.current.focus()}
          onChangeText={text => onChangedSystolic(text)}
        />
        <PanelText>/</PanelText>
        <PanelInput
          ref={diastolicRef}
          placeholder="'8'"
          maxLength={2}
          value={diastolic}
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
          onChangeText={text => onChangedDiastolic(text)}
        />
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

CholGlucPress.navigationOptions = {
  title: 'Sobre seus exames',
};
