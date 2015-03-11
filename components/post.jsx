var React = require('react');
var mui = require('material-ui');

var Post = React.createClass({
    render: function () {
        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Posted By: {this.props.author}</span>
                    <p>{this.props.children}</p>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href='#'>This is a link</a>
                </div>
            </div>
        );
    }
});

module.exports = Post;
