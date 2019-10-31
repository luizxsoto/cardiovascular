import React, { useState } from 'react';
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

export default function Age({ navigation }) {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const [day, setDay] = useState('01');
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2000');
  const [targetDate, setTargetDate] = useState(new Date('2000-01-02'));
  const [show, setShow] = useState(false);

  function valideDate(date, alert) {
    if (!isNaN(date) && currentDate > date) {
      return true;
    }
    if (alert) {
      Alert.alert('Data invalida', 'Digite uma data válida', [{ text: 'OK' }], {
        cancelable: false,
      });
      return false;
    }
    return false;
  }

  function changeDate(event, date) {
    setShow(false);
    if (date) {
      setDay(`00${date.getDate()}`.slice(-2));
      setMonth(`00${date.getMonth() + 1}`.slice(-2));
      setYear(`0000${date.getFullYear()}`.slice(-4));
      setTargetDate(date);
    }
  }

  function changeDay() {
    const tempDate = new Date(`${year}-${month}-${`00${day}`.slice(-2)}`);
    if (valideDate(tempDate, 1)) {
      setDay(`00${day}`.slice(-2));
      tempDate.setDate(tempDate.getDate() + 1);
      setTargetDate(tempDate);
    } else {
      setDay(`00${targetDate.getDate()}`.slice(-2));
    }
  }

  function changeMonth() {
    const tempDate = new Date(`${year}-${`00${month}`.slice(-2)}-${day}`);
    if (valideDate(tempDate, 1)) {
      setMonth(`00${month}`.slice(-2));
      tempDate.setDate(tempDate.getDate() + 1);
      setTargetDate(tempDate);
    } else {
      setMonth(`00${targetDate.getMonth() + 1}`.slice(-2));
    }
  }

  function changeYear() {
    if (year <= currentDate.getFullYear() && year >= 1900) {
      const tempDate = new Date(`${`0000${year}`.slice(-4)}-${month}-${day}`);
      if (valideDate(tempDate, 1)) {
        setYear(`0000${year}`.slice(-4));
        tempDate.setDate(tempDate.getDate() + 1);
        setTargetDate(tempDate);
      } else {
        setYear(`0000${targetDate.getFullYear()}`.slice(-4));
      }
    } else {
      setYear(`0000${targetDate.getFullYear()}`.slice(-4));
    }
  }

  function handleClickOut() {
    Keyboard.dismiss();
  }

  function handleSubmit() {
    const tempDate = new Date(
      `${`0000${year}`.slice(-4)}-${`00${month}`.slice(-2)}-${`00${day}`.slice(
        -2
      )}`
    );
    if (valideDate(tempDate, 0)) {
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
            keyboardType="numeric"
            maxLength={2}
            value={day}
            onChangeText={text => setDay(text)}
            onBlur={changeDay}
          />
          <PickerInput
            keyboardType="numeric"
            maxLength={2}
            value={month}
            onChangeText={text => setMonth(text)}
            onBlur={changeMonth}
          />
          <PickerInput
            keyboardType="numeric"
            maxLength={4}
            value={year}
            onChangeText={text => setYear(text)}
            onBlur={changeYear}
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

Age.navigationOptions = {
  title: 'Sobre você',
};
