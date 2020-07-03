import * as React from 'react';

import { render } from 'react-dom';

import App from './App';

import './styles/output.css';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
