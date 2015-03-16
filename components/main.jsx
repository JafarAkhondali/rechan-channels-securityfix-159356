var React = require('react');
var mui = require('material-ui');
var Home = require('./home.jsx');
var Posts = require('./posts.jsx');
var Camera = require('./camera.jsx');

var Main = React.createClass({
    render: function () {
        var route = this.props.route;

        if (route === 'home') {
          return (
            <div className="main-container">
              <Home />
            </div>
          );
        }
        if (route === 'posts') {
          return (
            <div className="main-container">
              <Posts />
            </div>
          );
        }
        if (route === 'camera') {
          return (
            <div className="main-container">
              <Camera />
            </div>
          );
        }
        else {
          return (
            <div className="main-container">
              <Home />
            </div>
          );
        }

    }
});

module.exports = Main;
