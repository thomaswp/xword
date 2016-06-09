const React = require('react');
const Cell = require('./Cell.jsx');
const { StyleSheet, css } = require('aphrodite');

const [ LEFT, UP, RIGHT, DOWN ] = [ 37, 38, 39, 40 ];
const keyDirs = {
    37: [0, -1],
    38: [-1, 0],
    39: [0, 1],
    40: [1, 0],
}
const SPACE = 32;

const Grid = React.createClass({

    getDefaultProps: function() {
        return {
            rows: 10,
            columns: 10,
        }
    },

    getInitialState: function() {
        return {
            selected: [2, 3],
            data: this.generateDataArray(),
        };
    },

    componentDidMount: function() { },
    componentWillUpdate: function(nextProps, nextState) { },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            data: this.generateDataArray(),
        });
    },

    generateDataArray: function() {
        return Array.from(Array(this.props.rows), () => 
                Array.from(Array(this.props.columns), () => ""));
    },
     
    selectChild: function(row, column) {
        row = Math.max(0, Math.min(row, this.props.rows - 1));
        column = Math.max(0, Math.min(column, this.props.columns - 1));
        this.setState({selected: [row, column]});
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
        return JSON.stringify(nextState) != JSON.stringify(this.state);
    },
    
    render: function() {
        const {rows, columns} = this.props;
        const [sRow, sCol] = this.state.selected;
        return (
            <div onKeyDown={this.onKeyDown} >
                <table className={css(styles.collapse)} >
                    <tbody>
                        {[...Array(rows)].map((x, r) =>
                            <tr key={r}>
                            {[...Array(columns)].map((x, c) =>
                                <td className={css(styles.collapse)} key={r * columns + c}>
                                    <Cell letter={this.state.data[r][c]} key={r * columns + c} 
                                        ref={"c" + (r * columns + c)} selected={r == sRow && c == sCol}
                                        onFocus={this.selectChild} row={r} column={c}
                                    />
                                </td>
                            )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    },

    onKeyDown: function(e) {
        e.preventDefault();
        const key = e.keyCode;
        const char = "" + e.key;
        const dir = keyDirs[key];
        if (dir) {
            var selected = this.state.selected;
            this.selectChild(selected[0] + dir[0], selected[1] + dir[1]);
        } else if (/^[A-Za-z ]$/.test(char)) {
            const data = this.state.data;
            const selected = this.state.selected;
            data[selected[0]][selected[1]] = char.toUpperCase();
            const delta = keyDirs[e.shiftKey ? DOWN : RIGHT];
            this.selectChild(selected[0] + delta[0], selected[1] + delta[1]);
            this.forceUpdate();
        }
    }
});

const styles = StyleSheet.create({
    collapse: {
        borderCollapse: "collapse",
        border: "thin solid black",
        padding: 0,
    },
});

module.exports = Grid;