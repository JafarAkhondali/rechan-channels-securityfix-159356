var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;

var PostActions = require("../actions/post-actions");

var Footer = React.createClass({
    takePicture: function () {
        document.querySelector('.camera-container').innerHTML = "You took a picture!";
    },

    submitPost: function () {
        var postContent = document.querySelector('.post-content').value;
        var post = {
                author: 'paul',
                content: postContent
            };

        PostActions.createPost(post);
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    },

    render: function () {
        return (
            <div className="footer-container green center">
                <IconButton iconClassName="mdi-image-camera-alt" onClick={this.takePicture} />
                <input type="text" className="post-content" />
                <IconButton iconClassName="mdi-communication-message" onClick={this.submitPost} />
            </div>
        );
    }
});

module.exports = Footer;
