import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDpPzbKeNA8WtZpHWhFiAQGETaU00YHie8',
            authDomain: 'manager-react-native-e38e3.firebaseapp.com',
            databaseURL: 'https://manager-react-native-e38e3.firebaseio.com',
            projectId: 'manager-react-native-e38e3',
            storageBucket: '',
            messagingSenderId: '1039397429895'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router>
                </Router>
            </Provider>
        );
    }
}

export default App;
