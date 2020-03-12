import React from 'react';
import ReactDom from 'react-dom';

const App = () => <div>This is a react component, and I print something in the console.</div>

ReactDom.render(<App />, document.getElementById('root'));