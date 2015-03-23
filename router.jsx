// React
var React = require('react');
var Router = require('react-router');
var Sheet = require('./components/sheet.jsx');
var Home = require('./components/home.jsx');
var Posts = require('./components/posts.jsx');
var Camera = require('./components/camera.jsx');
var SubmitPost = require('./components/submitPost.jsx');
var NotFound = require('./components/notfound.jsx');

var PostActions = require('./actions/post-actions.js');

// Set up Router object
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Declare routes
var routes = (
  <Route handler={Sheet} path="/">
    <DefaultRoute name="home" handler={Home} />
    <Route name="posts" handler={Posts} />
    <Route name="camera" handler={Camera} texttt="hi!" />
    <Route name="submitPost" handler={SubmitPost} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

var seedPosts = [
      { id: 1, author: "user #1", content: "this is a post", photo: null },
      { id: 2, author: "user #2", content: "this is a post", photo: null },
      { id: 3, author: "user #3", content: "this is a post", photo: null },
      { id: 4, author: "user #4", content: "this is a post", photo: null },
      { id: 5, author: "user #5", content: "this is a post", photo: null },
      { id: 6, author: "user #6", content: "this is a post", photo: null },
      { id: 7, author: "user #7", content: "this is a post", photo: null },
      { id: 8, author: "user #8", content: "this is a post", photo: null },
    ];

module.exports = {
  run: function (el) {
    PostActions.loadPosts(seedPosts);
    Router.run(routes, function (Handler, state) {
      var params = state.params;

      React.render(<Handler params={params} />, el);
    });
  }
};
