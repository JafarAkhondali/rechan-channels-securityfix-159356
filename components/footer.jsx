var React = require('react');
var mui = require('material-ui');

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer-container green center">
                <a href="#"><i className="mdi-image-camera-alt"></i></a>
            </div>
        );
    }
});

module.exports = Footer;
