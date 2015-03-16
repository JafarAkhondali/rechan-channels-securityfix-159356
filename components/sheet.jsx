var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

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
