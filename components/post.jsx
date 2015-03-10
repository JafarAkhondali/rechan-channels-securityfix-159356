var React = require('react');
var mui = require('material-ui');

var Post = React.createClass({
    render: function () {
        return (
            <div className="post-container">
                <h2>This is a post!</h2>
                Posted By: {this.props.author}<br />
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
});

module.exports = Post;
