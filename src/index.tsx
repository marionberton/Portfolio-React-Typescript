import * as React from 'react';
import { render } from 'react-dom';
import TagManager from 'react-gtm-module';

import App from './App';
import { env } from './env';

import './styles/output.css';

const tagManagerArgs = {
  gtmId: env.gtm,
};

TagManager.initialize(tagManagerArgs);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
