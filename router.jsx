// React
var React = require('react');
var Router = require('react-router');
var Sheet = require('./components/sheet.jsx');
var Home = require('./components/home.jsx');
var Posts = require('./components/posts.jsx');
var Camera = require('./components/camera.jsx');
var NotFound = require('./components/notfound.jsx');

// Request
var request = require("superagent");

// Set up Router object
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Declare routes
var routes = (
  <Route handler={Sheet} path="/">
    <DefaultRoute name="home" handler={Home} />
    <Route name="posts" handler={Posts} />
    <Route name="camera" handler={Camera} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = {
  run: function (el) {
    // request
    //   .get("/recipes")
    //   .set("Accept", "application/json")
    //   .end(function (error, res) {
    //     RecipeActions.loadRecipes(res.text);
        Router.run(routes, function (Handler, state) {
          // "Alternatively, you can pass the param data down..."
          // https://github.com/rackt/react-router/blob/master/docs/guides/
          // overview.md#dynamic-segments
          var params = state.params;
          React.render(<Handler params={params} />, el);
        });
      // });
  }
};
