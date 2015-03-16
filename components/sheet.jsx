var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;

var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'css-framework', text: 'CSS Framework' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
    ];

var Sheet = React.createClass({
    render: function () {
        return (
            <div className="sheet-container">
                <div className="main-container">
                  <RouteHandler {...this.props} />
                </div>
                <Header />
                <Footer />
            </div>
        );
    }
});

module.exports = Sheet;
