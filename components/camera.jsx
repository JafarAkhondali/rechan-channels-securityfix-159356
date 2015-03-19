var React = require('react');
var mui = require('material-ui');

var Camera = React.createClass({
    setInitialState: function () {
        this.props.texttt = "camera";
    },

    render: function () {
        return (
            <div className="camera-container" refs="cameraContainer">
                {this.props.texttt}
            </div>
        );
    }
});

module.exports = Camera;
