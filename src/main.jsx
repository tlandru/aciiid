
var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="Christmas List"/>, document.getElementById('christmas'));
ReactDOM.render(<ListManager title="TO DO" headingColor="#fff"/>, document.getElementById('todo'));
