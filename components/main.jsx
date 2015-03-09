var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <RaisedButton label="Default" />
      </div>
    );
  }
});

module.exports = Main;
