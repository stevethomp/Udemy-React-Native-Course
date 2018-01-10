import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        };
    }

    logIn() {
        const { email, password } = this.state;

        this.setState({ loading: true, error: '' })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLogInSuccess.bind(this))
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLogInSuccess.bind(this))
                    .catch(this.onLogInFailed.bind(this));
            });
    }

    onLogInFailed() {
        this.setState({ error: 'Authentication Failed :(', loading: false })
    }

    onLogInSuccess() {
        this.setState({
            loading: false,
            error: '',
            email: '',
            password: ''
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        } else {
            return (
                <Button onPress={this.logIn.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    render() {
        const { inputStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        title="Email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="user@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        title="Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
