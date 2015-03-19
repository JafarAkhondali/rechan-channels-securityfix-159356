var Biff = require('../biff');

var PostActions = Biff.createActions({
    loadPosts: function (data) {
      this.dispatch({
        actionType: "POSTS_LOAD",
        data: data
      });
    },
    createPost: function (data) {
      this.dispatch({
        actionType: "POST_CREATE",
        data: data
      });
    }
});

module.exports = PostActions;
