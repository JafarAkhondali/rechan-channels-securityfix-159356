var React = require('react');
var mui = require('material-ui');

var Post = React.createClass({
    render: function () {
        return (
            <div className="post-container">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Posted By: {this.props.post.author}</span>
                        <p>{this.props.post.content}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">reply</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Post;
