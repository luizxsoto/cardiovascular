import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { apiApp } from '~/services/api';

import { Container, Text } from './styles';

export default function Response() {
  const [resp, setResp] = useState({ prediction: '', probability: [[]] });
  const age = useSelector(state => state.user.age);
  const gender = useSelector(state => state.user.gender);
  const height = useSelector(state => state.user.height);
  const weight = useSelector(state => state.user.weight);
  const systolic = useSelector(state => state.user.systolic);
  const diastolic = useSelector(state => state.user.diastolic);
  const cholesterol = useSelector(state => state.user.cholesterol);
  const gluc = useSelector(state => state.user.gluc);
  const smoke = useSelector(state => state.user.smoke);
  const alco = useSelector(state => state.user.alco);
  const active = useSelector(state => state.user.active);

  async function handleSend() {
    await apiApp
      .post('/predict', {
        features: [
          age * 365,
          gender,
          height,
          weight,
          systolic,
          diastolic,
          cholesterol,
          gluc,
          smoke,
          alco,
          active,
        ],
      })
      .then(res => setResp(res.data))
      .catch(err => Alert.alert('Erro', `${err}`));
  }

  useEffect(() => {
    handleSend();
  }, []);

  return (
    <Container>
      <Text>
        Responses: {age},{gender},{height},{weight},{systolic},{diastolic},
        {cholesterol},{gluc},{smoke},{alco},{active}
      </Text>
      <Text>Prediction: {resp.prediction}</Text>
      <Text>Probability to 0: {resp.probability[0][0]}</Text>
      <Text>Probability to 1: {resp.probability[0][1]}</Text>
    </Container>
  );
}

Response.navigationOptions = {
  title: 'Resposta',
};
