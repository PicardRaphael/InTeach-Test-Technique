/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
render(<App />, document.getElementById('root'));
