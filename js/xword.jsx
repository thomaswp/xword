const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('./grid.jsx');

const Application = React.createClass({
    render: function() {
        return <Grid />;
    }
});

ReactDOM.render(
  <Application />,
  document.getElementById('container')
);