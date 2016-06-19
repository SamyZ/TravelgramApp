import React from 'react';
import {
   Navigator,
   View,
   Text,
 } from 'react-native';

const routeStack = [
  { name: 'login' },
  { name: 'home' },
];

class Navigation extends React.Component {
  configureScene = () => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      case 'login':
      case 'home':
      default:
        renderedView = <View><Text>Welcome to TravelGram app</Text></View>;
        break;
    }
    return renderedView;
  }

  render = () => (
    <Navigator
      initialRoute={routeStack[0]}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
    />
  );
}

export default Navigation;
