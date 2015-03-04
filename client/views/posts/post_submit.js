Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var post = {
            title: $(e.target).find('[name=title]').val(),
            content: $(e.target).find('[name=content]').val(),
            parentId: this._id
        };

        Meteor.call('post', post, function (error, id) {
            if (error) {
                // display the error to the user
                Errors.throw(error.reason);

                if (error.error === 302) {
                    Router.go('postPage', {_id: error.details});
                }
            }
            else {
                Router.go('postPage', {_id: id});
            }
        });
    }
});
