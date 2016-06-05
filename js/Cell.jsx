const React = require('react');
const { StyleSheet, css } = require('aphrodite');

const size = 30;

const Cell = React.createClass({
    
    getInitialState: function() {
        return {
            letter: this.props.letter,
        }
    },
  
    render: function() {
        var cellStyles = [styles.cell];
        if (this.props.selected) cellStyles.push(styles.selected)
        return (
            <div className={css.apply(this, cellStyles)} onClick={this.onClick}>
                <a className={css(styles.link)} tabIndex="0" ref="text" 
                        onFocus={this.onFocus}>
                    {this.state.letter}
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
        console.log("f", this.state.letter);
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
    },
    
    selected: {
        backgroundColor: "gray", 
    },
    
    link: {
        outline: 0,
    },
});


module.exports = Cell;