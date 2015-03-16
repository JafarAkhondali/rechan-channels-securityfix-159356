var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;

var menuItems = [
      { route: 'home', text: 'Home' },
      { route: 'posts', text: 'Posts' },
      { route: 'camera', text: 'Camera' },
      { type: MenuItem.Types.SUBHEADER, text: '(note: these links should actually be a list of available channels)' }
    ];

var Header = React.createClass({
    toggleLeftNav: function () {
        this.refs.leftNav.toggle();
    },

    render: function () {
        return (
            <div className="header-container green">
                <LeftNav menuItems={menuItems} docked={false} ref="leftNav" />
                <nav>
                    <div className="nav-wrapper green">
                        <ul className="left">
                            <li>
                                <IconButton iconClassName="mdi-action-list" onClick={this.toggleLeftNav} />
                            </li>
                        </ul>
                        <ul className="right">
                            <li><a href="sass.html"><i className="mdi-action-search"></i></a></li>
                            <li><a href="components.html"><i className="mdi-action-view-module"></i></a></li>
                            <li><a href="javascript.html"><i className="mdi-navigation-refresh"></i></a></li>
                            <li><a href="mobile.html"><i className="mdi-navigation-more-vert"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Header;
