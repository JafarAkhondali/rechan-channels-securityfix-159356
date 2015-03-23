var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;
var Posts = require('./posts.jsx');

var PostActions = require("../actions/post-actions");

var SubmitPost = React.createClass({
    photo: null,

    takePicture: function () {
        document.querySelector('.camera-container').innerHTML = "You took a picture!";

        this.photo = 'some photo data';
    },

    generateUUID: function () {
        var d = new Date().getTime();
        var uuid;

        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;

            d = Math.floor(d/16);

            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });

        return uuid;
    },

    submitPost: function () {
        var postId = this.generateUUID();
        var postAuthor = 'paul';
        var postContent = document.querySelector('.post-content').value;
        var postPhoto = this.photo;

        var post = {
                id: postId,
                author: postAuthor,
                content: postContent,
                photo: postPhoto
            };

        PostActions.createPost(post);

        React.render(<Posts/>, document.querySelector('.main-container'));
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
            this.photo = null;
        }, 500);
    },

    render: function () {
        return (
            <div className="submit-post-container">
                <IconButton iconClassName="mdi-image-camera-alt" onClick={this.takePicture} />
                <input type="text" className="post-content" />
                <IconButton iconClassName="mdi-communication-message" onClick={this.submitPost} />
            </div>
        );
    }
});

module.exports = SubmitPost;
