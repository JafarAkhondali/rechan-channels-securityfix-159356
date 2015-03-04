Posts = new Meteor.Collection('posts');

Posts.allow({
    update: ownsDocument,
    remove: ownsDocument
});

Meteor.methods({
    post: function (postAttributes) {
        var user = Meteor.user();
        var parentPost = Posts.findOne(postAttributes.parentId);

        // ensure the user is logged in
        if (!user) {
            throw new Meteor.Error(401, 'You need to login to post new stories');
        }

        // ensure the post has a title
        if (!postAttributes.title) {
            throw new Meteor.Error(422, 'Please fill in a headline');
        }

        // pick out the whitelisted keys
        var post = _.extend(_.pick(postAttributes, 'content'), {
                title: postAttributes.title,
                userId: user._id,
                author: user.username,
                submitted: new Date().getTime(),
                childrenCount: 0,
                parentId: postAttributes.parentId
            });

        // wait for 5 seconds
        if (!this.isSimulation) {
            var Future = Npm.require('fibers/future');
            var future = new Future();

            Meteor.setTimeout(function () {
                future.return();
            }, 5 * 1000);
            future.wait();
        }

        var postId = Posts.insert(post);

        return postId;
    }
});
