import React from 'react';
import Hello from '../components/Hello';

module.exports = function(req, res) {
  var state = {
    who: "World"
  };

  var element = <Hello who={state.who} />;
  var markup = React.renderToString(element);

  res.render('home', {
    markup: markup,
    state: JSON.stringify(state)
  });
};
