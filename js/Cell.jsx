const React = require('react');

const Cell = React.createClass({
    
    getInitialState: function() {
        return {
            letter: this.props.letter
        }
    },
  
    render: function() {
        return (
            <div>
                {this.state.letter}
            </div>
        );
    }
});

module.exports = Cell;