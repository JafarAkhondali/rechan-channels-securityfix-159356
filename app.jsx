(function () {
  var React = require('react');
  var injectTapEventPlugin = require("react-tap-event-plugin");
  var Sheet = require('./components/sheet.jsx');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  injectTapEventPlugin();

  React.render(<Sheet route={'posts'} />, document.body);
})();
