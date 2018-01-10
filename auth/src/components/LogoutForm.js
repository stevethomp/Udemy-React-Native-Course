import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Spinner } from './common';

export default class LogoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: false };
    }

    logout() {
        this.setState({ loading: true })

        firebase.auth().signOut()
            .then(() => this.setState({ loading: false }))
            .catch((error) => this.setState({ loading: false }))
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        } else {
            return (
                <Button style={styles.buttonStyle} onPress={this.logout.bind(this)}>
                    Log Out
                </Button>
            )
        }
    }

    render() {
        return (
            <Card style={styles.buttonStyle}>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    buttonStyle: {
        height: 40
    }
};

