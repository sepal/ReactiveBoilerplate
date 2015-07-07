import front from './front';

module.exports = function (app) {
  app.get('/', front);
};
