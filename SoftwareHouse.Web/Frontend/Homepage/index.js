"use strict";
exports.__esModule = true;
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var ReactDOM = require("react-dom");
var React = require("react");
var Demo_1 = require("./Components/Demo/Demo");
ReactDOM.render(React.createElement(Demo_1["default"], null), document.getElementById('react-homepage-root'));
if (module.hot) {
    module.hot.accept();
}
