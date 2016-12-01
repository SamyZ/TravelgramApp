import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import homeStyles from '../styles/homeStyles';
import TextOpenSans from './utils/TextOpenSans';
import BackgroundView from './BackgroundView';
import instagramLogo from '../../assets/icon-instagram-white.png';

const propTypes = {
  navigator: React.PropTypes.object,
};

class HomeView extends React.Component {
  // componentDidMount = () => {
  //   const url = Linking.getInitialURL().then(url => {
  //     console.log('getting stuff');
  //     console.log(url);
  //   });
  // }

  goToMenu = () => {
    this.props.navigator.push({ name: 'menu' });
  }

  render = () => (
    <BackgroundView>
      <View style={homeStyles.marginTopContainer} />
      <TouchableOpacity style={homeStyles.contentContainer} onPress={this.goToMenu} >
        <Image source={instagramLogo} />
        <TextOpenSans style={homeStyles.loginText}>
          LOGIN WITH INSTAGRAM
        </TextOpenSans>
      </TouchableOpacity>
    </BackgroundView>
  );
}

HomeView.propTypes = propTypes;

export default HomeView;
