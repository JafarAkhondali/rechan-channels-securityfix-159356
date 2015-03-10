var React = require('react');
var mui = require('material-ui');
var Post = require('./post.jsx');

var Posts = React.createClass({
    render: function () {
        return (
            <div className="posts-container">
                <Post author="user #1">This a post.</Post>
                <Post author="user #2">This is *another* post.</Post>
                <Post author="user #3">This is a third post.</Post>
            </div>
        );
    }
});

module.exports = Posts;
