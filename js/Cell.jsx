const React = require('react');
const { StyleSheet, css } = require('aphrodite');

const size = 30;

const Cell = React.createClass({
  
    render: function() {
        var cellStyles = [styles.cell];
        if (this.props.selected) cellStyles.push(styles.selected);
        if (this.props.letter === " ") cellStyles.push(styles.black); 
        return (
            <div className={css.apply(this, cellStyles)} onClick={this.onClick}>
                <a className={css(styles.link)} tabIndex="0" ref="text" 
                        onFocus={this.onFocus}>
                    {this.props.letter}
                </a>
            </div>
        );
    },
    
    componentDidMount: function() {
        this.componentDidUpdate();
    },
    
    componentDidUpdate: function() {
        if (this.props.selected) {
            this.onClick();
        }
    },
    
    onClick: function() {
        this.refs.text.focus();
    },
    
    onFocus: function() {
        this.props.onFocus(this.props.row, this.props.column);
    },
    
    test: function() {
        
    }
});

const styles = StyleSheet.create({
    cell: {
        height: size,
        width: size,
        lineHeight: size + "px",
        textAlign: "center",
        boxSizing: "border-box",
    },
    
    selected: {
        border: "solid gray 3px",
        lineHeight: (size - 6) + "px", 
    },

    black: {
        backgroundColor: "black",
    },
    
    link: {
        outline: 0,
    },
});


module.exports = Cell;