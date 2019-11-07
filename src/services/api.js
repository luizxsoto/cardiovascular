import axios from 'axios';

export const apiApp = axios.create({
  baseURL: 'http://healthyapp-env.kbdkx2e2yv.us-east-2.elasticbeanstalk.com',
});

export const apiUser = axios.create({
  baseURL: 'https://api-higia.herokuapp.com',
});
