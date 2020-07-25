import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './store/Store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
	<Store>
    	<App />
	</Store>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
