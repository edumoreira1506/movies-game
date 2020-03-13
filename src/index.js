import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ServiceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

ServiceWorker.register();
