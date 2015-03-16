var React = require('react');
var mui = require('material-ui');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="home-container">
                home<br />
                <Link to="posts">Posts</Link>
            </div>
        );
    }
});

module.exports = Home;
