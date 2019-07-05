const env = process.env.NODE_ENV || 'development';

const config = {
  production: {
    frontendBaseUrl: process.env.FRONTEND_URL || 'http://localhost:8080',
    
  },
  development: {
    frontendBaseUrl: process.env.DEV_FRONTEND_URL || 'http://localhost:8080',
    
  },
  test: {}
};

module.exports = config[env];

