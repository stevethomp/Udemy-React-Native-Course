import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

export default class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		// Initialize Firebase
		firebase.initializeApp({
			apiKey: "AIzaSyDUxDcpY9ZqWyD6K1YYYaoVozLdnFOFXr8",
			authDomain: "auth-react-native-b6155.firebaseapp.com",
			databaseURL: "https://auth-react-native-b6155.firebaseio.com",
			projectId: "auth-react-native-b6155",
			storageBucket: "auth-react-native-b6155.appspot.com",
			messagingSenderId: "198282258160"
		});

		firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this))
	}

	onAuthStateChanged(user) {
		if (user) {
			this.setState({ loggedIn: true })
		} else {
			this.setState({ loggedIn: false })
		}
	}

	renderMainView() {
		switch (this.state.loggedIn) {
			case true:
				return <LogoutForm />;
			case false:
				return <LoginForm />;
			default:
				return <Spinner />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderMainView()}
			</View>
		);
	}
}
