// BookingScreen.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleLogin = () => {
    // Logic for handling login
    console.log('Login button pressed');
  };

  handleSignUp = () => {
    // Logic for handling sign up
    console.log('Sign Up button pressed');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome</Text>
        <TextInput
          placeholder="Username"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button title="Sign Up" onPress={this.handleSignUp} />
      </View>
    );
  }
}
