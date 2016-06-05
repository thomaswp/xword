const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('./Grid.jsx');

const Application = React.createClass({
    render: function() {
        return <Grid />;
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById('container')
);