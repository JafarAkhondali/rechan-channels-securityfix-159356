/**
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */


// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "posts".
Posts = new Meteor.Collection("newPosts");

Meteor.methods({
    addPost: function(text) {
        Posts.insert({
          text: text,
          createdAt: new Date()
        });
    }
});

var PostCreator = ReactMeteor.createClass({
    createPost: function(text) {
        Meteor.call("addPost", text);
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text) {
          return;
        }
        createPost(text);
        this.refs.text.getDOMNode().value = '';
    },

    render: function() {
        return(
	        <form className="post-form" onSubmit={this.handleSubmit}>
	    	      <input type="text" placeholder="Post text..." />
	          	<input type="submit" value="Post" />
	        </form>
	      );
    }
});

if (Meteor.isClient) {
    Meteor.startup( function() {
      React.render(
          <PostCreator />,
          document.getElementById("postCreator")
        );
    });
}
