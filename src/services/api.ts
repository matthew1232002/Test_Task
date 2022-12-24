import axios from 'axios';

import * as tokenRepository from './tokenRepository';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

api.interceptors.request.use(async (config) => {
  /* eslint no-param-reassign: "error" */
  config.headers = {
    Authorization: `Bearer ${tokenRepository.getToken()}`,
  };

  return config;
});
