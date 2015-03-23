var React = require('react');

var Post = React.createClass({
    render: function () {
        var photo = this.props.post.photo;
        var author = this.props.post.author;
        var content = this.props.post.content;

        return (
            <div className="post-container">
                <div className="card blue-grey darken-1">
                    <div className="card-image">
                        <img src="images/{photo}" />
                        <span className="card-title">Posted By: {author}</span>
                    </div>
                    <div className="card-content white-text">
                        <p>{content}</p>
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
