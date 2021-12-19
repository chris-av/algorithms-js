const path = require('path');
const config = {
  verbose: true,
  moduleNameMapper: {
    "^@utils(.*)$": "<rootDir>/utils$1"
  }
}

module.exports = config;
