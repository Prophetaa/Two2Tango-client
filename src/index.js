import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router history={history}>
				<App />
			</Router>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
