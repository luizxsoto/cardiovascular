import React, { useState, useRef } from 'react';
import { Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Creators as UserCreators } from '~/store/ducks/user';

import {
  Container,
  QuestionImage,
  QuestionText,
  Picker,
  PickerInput,
  CalendarButton,
  SendButton,
  SendText,
} from './styles';

export default function Birthday({ navigation }) {
  const dispatch = useDispatch();
  const monthRef = useRef();
  const yearRef = useRef();
  const currentDate = new Date();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [targetDate, setTargetDate] = useState(new Date('2000-01-01'));
  const [show, setShow] = useState(false);

  function valideDate(date) {
    if (!isNaN(date) && currentDate > date) {
      return true;
    }
    Alert.alert('Data invalida', 'Digite uma data válida', [{ text: 'OK' }], {
      cancelable: false,
    });
    return false;
  }

  function changeDate(event, date) {
    setShow(false);
    if (date) {
      setDay(`0${date.getDate()}`.slice(-2));
      setMonth(`0${date.getMonth() + 1}`.slice(-2));
      setYear(`0${date.getFullYear()}`.slice(-4));
      setTargetDate(date);
    }
  }

  function changeDay(text) {
    // tempDate.setDate(tempDate.getDate() + 1); // <- if necessary
    if (text > 3 && text < 10) {
      setDay(`0${text}`.slice(-2));
      monthRef.current.focus();
    } else if (text > 31) {
      setDay('31');
      monthRef.current.focus();
    } else if (text === '0' || text === '00') {
      setDay('');
    } else if (text.length > 1) {
      setDay(`0${text.replace(/[^0-9]/g, '')}`.slice(-2));
      monthRef.current.focus();
    } else {
      setDay(text.replace(/[^0-9]/g, ''));
    }
  }

  function changeMonth(text) {
    if (text > 1 && text < 10) {
      setMonth(`0${text}`.slice(-2));
      yearRef.current.focus();
    } else if (text > 12) {
      setMonth('12');
      yearRef.current.focus();
    } else if (text === '0' || text === '00') {
      setMonth('');
    } else if (text.length > 1) {
      setMonth(`0${text.replace(/[^0-9]/g, '')}`.slice(-2));
      yearRef.current.focus();
    } else {
      setMonth(text.replace(/[^0-9]/g, ''));
    }
  }

  function changeYear(text) {
    if (text > 2000) {
      setYear('2000');
    } else if (text === '0') {
      setYear('');
    } else {
      setYear(text.replace(/[^0-9]/g, ''));
    }
  }

  function handleClickOut() {
    Keyboard.dismiss();
  }

  function handleSubmit() {
    if (!day || !month || !year) {
      Alert.alert(
        'Preencha os campos',
        'É necessário que preencha todos campos para realizarmos a predição',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
      return;
    }
    if (year < 1900) {
      Alert.alert(
        'Data muito distante',
        'Nosso modelo foi treinado para pessoas que nasceram no mínimo em 1900',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
      return;
    }
    const tempDate = new Date(
      `${`0${year}`.slice(-4)}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`
    );
    if (valideDate(tempDate)) {
      const date = parseInt((currentDate - tempDate) / 3600000 / 24, 10);
      dispatch(UserCreators.changeAge(date));
      navigation.navigate('Height');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleClickOut()}>
      <Container>
        <QuestionImage />
        <QuestionText>Qual sua data de nascimento?</QuestionText>
        <Picker>
          <PickerInput
            maxLength={2}
            value={day}
            onChangeText={text => changeDay(text)}
            returnKeyType="next"
            onSubmitEditing={() => monthRef.current.focus()}
            onBlur={() => setDay(`0${day}`.slice(-2))}
            placeholder="Dia"
          />
          <PickerInput
            ref={monthRef}
            maxLength={2}
            value={month}
            onChangeText={text => changeMonth(text)}
            returnKeyType="next"
            onSubmitEditing={() => yearRef.current.focus()}
            onBlur={() => setMonth(`0${month}`.slice(-2))}
            placeholder="Mês"
          />
          <PickerInput
            ref={yearRef}
            maxLength={4}
            value={year}
            onChangeText={text => changeYear(text)}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit()}
            placeholder="Ano"
          />
          <TouchableWithoutFeedback onPress={() => handleClickOut()}>
            <CalendarButton onPress={() => setShow(true)}>
              <Icon name="calendar-month" size={20} />
            </CalendarButton>
          </TouchableWithoutFeedback>
        </Picker>
        {show && (
          <DateTimePicker
            value={targetDate}
            display="calendar"
            onChange={changeDate}
            maximumDate={new Date('2000-12-31')}
            minimumDate={new Date('1900-01-01')}
          />
        )}
        <TouchableWithoutFeedback onPress={() => handleClickOut()}>
          <SendButton onPress={() => handleSubmit()}>
            <SendText>Próximo</SendText>
          </SendButton>
        </TouchableWithoutFeedback>
      </Container>
    </TouchableWithoutFeedback>
  );
}

Birthday.navigationOptions = {
  title: 'Sobre você',
};
