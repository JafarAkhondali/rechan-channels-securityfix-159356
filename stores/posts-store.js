var Biff = require('../biff');
var _ = require('lodash');

var PostsStore = Biff.createStore({
  _posts: [],

  loadPosts: function (data) {
    this._posts = data;
  },

  createPost: function (post) {
    this._posts.push(post);
    console.log(this._posts);
  },

  deletePost: function (_id) {
    _.remove(this._posts, { _id: _id });
  },

  getPost: function (_id) {
    return _.find(this._posts, { _id: _id });
  },

  getPosts: function () {
    return this._posts;
  }
}, function (payload) {
  if (payload.actionType === "POST_CREATE") {
    this.createPost(payload.data);
    this.emitChange();
  }
  if (payload.actionType === "POST_DELETE") {
    this.deletePost(payload.data._id);
    this.emitChange();
  }
  if (payload.actionType === "POSTS_LOAD") {
    this.loadPosts(payload.data);
    this.emitChange();
  }
});

module.exports = PostsStore;
