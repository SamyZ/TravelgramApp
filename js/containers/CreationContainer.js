import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import NavBarView from '../views/create/NavBarView';
import SettingsView from '../views/create/SettingsView';
import ConfirmView from '../views/create/ConfirmView';
import CreatedView from '../views/create/CreatedView';

const propTypes = {
  navigator: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

const routeStack = [
  { name: 'Settings', index: 0 },
  { name: 'Confirm', index: 1 },
  { name: 'Created', index: 2 },
];

class CreationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      progress: 1 / routeStack.length,
    };
  }

  configureScene = (/* route, routeStack */) => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  navigateBackward = () => {
    if (this.state.index === 0) {
      this.props.navigator.pop(); // Leave creation and go back to menu
    } else {
      this.setState({
        index: this.state.index - 1,
        progress: (this.state.progress - 1) / routeStack.length,
      });
      this.creationNavigator.jumpBack();
    }
  }

  navigateForward = () => {
    const newIndex = this.state.index + 1;
    if (newIndex === routeStack.length) {
      this.props.navigator.pop(); // Leave challenge creation
    } else {
      this.setState({
        index: newIndex,
        progress: (this.state.progress + 1) / routeStack.length,
      });
      this.creationNavigator.jumpForward();
    }
  }

  renderScene = (route) => {
    switch (route.name) {
      default:
      case 'Settings':
        return (
          <SettingsView navigateForward={this.navigateForward} />);
      case 'Confirm':
        return (
          <ConfirmView navigateForward={this.navigateForward} />);
      case 'Created':
        return (
          <CreatedView navigateForward={this.navigateForward} />);
    }
  }

  render = () => (
    <Navigator
      ref={(creationNavigator) => { this.creationNavigator = creationNavigator; }}
      initialRoute={routeStack[0]}
      initialRouteStack={routeStack}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
      navigationBar={
        <NavBarView
          progress={this.state.progress}
          navigateBackward={this.navigateBackward}
        />}
    />
  );
}

CreationContainer.propTypes = propTypes;

export default connect()(CreationContainer);
