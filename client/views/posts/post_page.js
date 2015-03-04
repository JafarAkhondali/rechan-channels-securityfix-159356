Template.postPage.helpers({
    childrenPosts: function () {
        return Posts.find({parentId: this._id});
    }
});
