Template.postsList.helpers({
    postsAtThisLevel: function () {
        if (this._id) {
            return Posts.find({parentId: this._id});
        }
        else {
            return Posts.find({parentId: null});
        }
    }
});
