var React = require('react');
var Post = require('./post.jsx');

var PostsStore = require("../stores/posts-store");

function getState() {
    return {
        store: PostsStore.getPosts()
    };
}

var Posts = React.createClass({
    mixins: [PostsStore.mixin],

    getInitialState: function () {
        return getState();
    },

    storeDidChange: function () {
        this.setState(getState());
    },

    createPostNodes: function () {
        var nodes = this.state.store.map(function (post) {
            return (
                <Post post={post} key={post.id} />
            );
        });
        return nodes;
      },

    render: function () {
        var postNodes = this.createPostNodes();

        return (
            <div className="posts-container">
                {postNodes}
            </div>
        );
    }
});

module.exports = Posts;
