import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
	componentWillMount(){
		 const config = {
		    apiKey: 'AIzaSyAnexSv37SD1OR1Bc7zmEPw7BvNYobuQvs',
		    authDomain: 'employees-manager-44689.firebaseapp.com',
		    databaseURL: 'https://employees-manager-44689.firebaseio.com',
		    projectId: 'employees-manager-44689',
		    storageBucket: 'employees-manager-44689.appspot.com',
		    messagingSenderId: '661125652863'
		  };
		  firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;