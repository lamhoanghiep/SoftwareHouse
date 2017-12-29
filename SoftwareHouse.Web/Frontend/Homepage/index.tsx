// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Demo from './Components/Demo/Demo';
ReactDOM.render(
    <Demo/>, document.getElementById('react-homepage-root')
);

declare var module: any;
if (module.hot) {
    module.hot.accept();
}