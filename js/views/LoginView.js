import React from 'react';
import {
   Text,
   View,
   Linking,
 } from 'react-native';

class LoginView extends React.Component {
  auth = (apiKey) => {
    Linking.openURL('https://api.instagram.com/oauth/authorize?client_id=3af622c9c098402794faa4de703e3eaa&redirect_uri=travelgramapp%3A%2F%2Fauth&scope=basic+follower_list&response_type=token&action=follow');
    console.log('auth in progress')
  }

  componentDidMount = () => {
    this.auth('3af622c9c098402794faa4de703e3eaa');
    const url = Linking.getInitialURL().then(url => {
      console.log('getting stuff');
      console.log(url);

    });
  }

  render = () => (
    <View><Text>Welcome to TravelGram app</Text></View>
  );
}

export default LoginView;
