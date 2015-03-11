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
                <Post author="user #4">This is a fourth post.</Post>
                <Post author="user #5">This is a fifth post.</Post>
                <Post author="user #6">This is a sixth post.</Post>
                <Post author="user #7">This is a seventh post.</Post>
                <Post author="user #8">OMG!  8 posts!</Post>
            </div>
        );
    }
});

module.exports = Posts;
