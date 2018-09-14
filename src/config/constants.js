require('dotenv').config();

// used to control the body of the requests
const WHITELIST = {};

// load dev configs from .env file
const devConfig = {
  ETH_NETWORK: process.env.ETH_TEST_NETWORK || 'localhost:8545',
};


// load prod configs from .env file
const prodConfig = {
  ETH_NETWORK: process.env.ETH_PROD_NETWORK || 'localhost:8545',
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
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
}
