import React from 'react';
import { Text } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';

// When configured correctly, URLSchemes should contain your REVERSED_CLIENT_ID
const { URLSchemes } = AppAuth;
// When configured correctly, URLSchemes should contain your REVERSED_CLIENT_ID
export default class AuthScreen extends React.Component {
    state = { user: null };

    componentDidMount() {
        this.initAsync();
        console.warn(URLSchemes)
    }

    initAsync = async () => {
        await GoogleSignIn.initAsync({
            clientId: '500571869292-89jbo4i0ef22o94sk7i52v1n6ookms1f.apps.googleusercontent.com',
        });
        this._syncUserWithStateAsync();
    };

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        this.setState({ user });
    };

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        this.setState({ user: null });
    };

    signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                this._syncUserWithStateAsync();
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    onPress = () => {
        if (this.state.user) {
            this.signOutAsync();
        } else {
            this.signInAsync();
        }
    };

    render() {
        return <Text onPress={this.onPress} style={{ color: 'white' }}>Toggle Auth</Text>;
    }
}