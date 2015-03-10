var React = require('react');
var mui = require('material-ui');
var Header = require('./header.jsx');
var Posts = require('./posts.jsx');
var Footer = require('./footer.jsx');

var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;

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

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <LeftNav menuItems={menuItems} />
                <Header />
                <Posts />
                <Footer />
            </div>
        );
    }
});

module.exports = Main;
