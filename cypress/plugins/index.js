const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}