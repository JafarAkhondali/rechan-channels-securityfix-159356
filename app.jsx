(function () {
  var React = require('react');
  var injectTapEventPlugin = require("react-tap-event-plugin");
  var Main = require('./components/main.jsx');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  injectTapEventPlugin();

  React.render(<Main />, document.body);
})();
