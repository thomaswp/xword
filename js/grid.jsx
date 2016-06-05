const React = require('react');
const Cell = require('./Cell.jsx');
const { StyleSheet, css } = require('aphrodite');

const Grid = React.createClass({
    getInitialState: function() {
        return {
            rows: 10,
            columns: 10,
            selected: [2, 3],
        };
    },
    
    // componentWillUpdate: function() {
    //     this.refs["c" + (r * columns + c)].setState({selected: true});
    // },
    
    childFocused: function(row, column) {
        this.setState({selected: [row, column]});
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
           return JSON.stringify(nextState) != JSON.stringify(this.state);
    },
    
    render: function() {
        const {rows, columns} = this.state;
        const [sRow, sCol] = this.state.selected;
        return (
            <table className={css(styles.collapse)} >
                <tbody>
                    {[,...Array(rows)].map((x, r) =>
                        <tr key={r}>
                        {[,...Array(columns)].map((x, c) =>
                            <td className={css(styles.collapse)} key={r * columns + c}>
                                <Cell letter={r+c} key={r * columns + c} 
                                    ref={"c" + (r * columns + c)} selected={r == sRow && c == sCol}
                                    onFocus={this.childFocused} row={r} column={c}
                                />
                            </td>
                        )}
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
});

const styles = StyleSheet.create({
    collapse: {
        borderCollapse: "collapse",
        border: "thin solid black"
    },
});

module.exports = Grid;