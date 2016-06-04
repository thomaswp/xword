const React = require('react');
const ReactDOM = require('react-dom');
//require('babel-core');

var x = [1, 2, 3, 9, 20];
console.log(x.map((a) => a * a));
var ExampleApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
        'React has been successfully running for ' + seconds + ' seconds.';

        return <p>{message}</p>;
    }
});
var start = new Date().getTime();
setInterval(function() {
    ReactDOM.render(
        <ExampleApplication elapsed={new Date().getTime() - start} />,
        document.getElementById('container')
    );
}, 50);