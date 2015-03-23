var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer-container green center">
                <Link to="submitPost">
                    <IconButton iconClassName="mdi-communication-message" />
                </Link>
            </div>
        );
    }
});

module.exports = Footer;
