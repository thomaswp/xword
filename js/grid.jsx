const React = require('react');
const Cell = require('./Cell.jsx');

const Grid = React.createClass({
    render: function() {
        return (
            <div>
                <Cell letter="A" /><Cell letter="B" /><Cell letter="C" />
            </div>
        );
    }
});

module.exports = Grid;