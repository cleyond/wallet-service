/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:43
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-07-04 19:55:43
 */
require('dotenv').config();

// used to control the body of the requests
const WHITELIST = {};

// load dev configs from .env file
const devConfig = {
};

// load test configs from .env file
const testConfig = {
};

// load prod configs from .env file
const prodConfig = {
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  RAVEN_DSN: process.env.RAVEN_DSN,
  WHITELIST,
};

function envConfig(env) {
  
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;

  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
}
