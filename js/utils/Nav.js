import React from 'react';
import { Navigator, BackAndroid } from 'react-native';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import MenuView from '../views/MenuView';
import CreationContainer from '../containers/CreationContainer';

const routeStack = [
  { name: 'login' },
  { name: 'home' },
  { name: 'menu' },
  { name: 'creation' },
];

class Navigation extends React.Component {
  componentDidMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.navigator.pop();
      return true;
    });
  };

  configureScene = () => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      case 'login':
        renderedView = <LoginView />;
        break;
      case 'menu':
        renderedView = <MenuView navigator={navigator} />;
        break;
      case 'creation':
        renderedView = <CreationContainer navigator={navigator} />;
        break;
      case 'account':
        renderedView = <MenuView navigator={navigator} />;
        break;
      case 'explore':
        renderedView = <MenuView navigator={navigator} />;
        break;
      case 'home':
      default:
        renderedView = <HomeView navigator={navigator} />;
        break;
    }
    return renderedView;
  }

  render = () => (
    <Navigator
      ref={(nav) => { this.navigator = nav; }}
      initialRoute={routeStack[1]}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
    />
  );
}

export default Navigation;
