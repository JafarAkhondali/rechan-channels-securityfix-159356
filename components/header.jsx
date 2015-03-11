var React = require('react');
var mui = require('material-ui');

var Header = React.createClass({
    render: function () {
        return (
            <div className="header-container">
                <nav>
                    <div className="nav-wrapper">
                        <ul className="center">
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
