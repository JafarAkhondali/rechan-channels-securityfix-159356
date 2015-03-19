var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;

var menuItems = [
      { route: 'posts', text: 'Fitness' },
      { route: 'posts', text: 'Hacking' },
      { route: 'posts', text: 'Basket Weaving' }
    ];

var Header = React.createClass({
    mixins: [Router.Navigation, Router.State],

    getInitialState: function () {
        return {
            selectedIndex: null
        };
    },

    toggleLeftNav: function () {
        this.refs.leftNav.toggle();
    },

     _getSelectedIndex: function () {
        var currentItem;

        for (var i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.isActive(currentItem.route)) {
                return i;
            }
        };
    },

    _onLeftNavChange: function (e, key, payload) {
        var channelName = menuItems[key].text;
        var channelNameContainer = document.querySelector('.channel-name-container');

        channelNameContainer.innerHTML = channelName;
        this.transitionTo(payload.route);

    },

    render: function () {
        return (
            <div className="header-container green">
                <LeftNav
                    menuItems={menuItems}
                    docked={false}
                    ref="leftNav"
                    isInitiallyOpen={false}
                    selectedIndex={null}
                    onChange={this._onLeftNavChange} />
                <nav>
                    <div className="nav-wrapper green">
                        <ul className="left">
                            <li>
                                <IconButton iconClassName="mdi-action-list" onClick={this.toggleLeftNav} />
                            </li>
                        </ul>
                        <div className="center">
                            <div className="channel-name-container">
                                Channel Name
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Header;
