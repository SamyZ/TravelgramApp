import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import MenuStyles from '../styles/MenuStyles';
import TextOpenSans from './utils/TextOpenSans';
import BackgroundView from './BackgroundView';
import travelgramLogo from '../../assets/logo.png';
import gogglesIcon from '../../assets/goggles.png';
import mapIcon from '../../assets/map.png';

const propTypes = {
  navigator: React.PropTypes.object,
};

class MenuView extends React.Component {
  navigateToCreation = () => this.props.navigator.push({ name: 'creation' });
  navigateToAccount = () => this.props.navigator.push({ name: 'account' });
  navigateToExplore = () => this.props.navigator.push({ name: 'explore' });

  render = () => (
    <BackgroundView>
      <View style={MenuStyles.mainContainer} >
        <TouchableOpacity style={MenuStyles.itemContainer} onPress={this.navigateToCreation} >
          <Image source={travelgramLogo} />
          <TextOpenSans style={MenuStyles.menuText}>
            CREATE MY TRAVELGRAM
          </TextOpenSans>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.itemContainer} onPress={this.navigateToAccount} >
          <Image source={gogglesIcon} />
          <TextOpenSans style={MenuStyles.menuText}>
            MY ACCOUNT
          </TextOpenSans>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.itemContainer} onPress={this.navigateToExplore} >
          <Image source={mapIcon} />
          <TextOpenSans style={MenuStyles.menuText}>
            EXPLORE
          </TextOpenSans>
        </TouchableOpacity>
      </View>
    </BackgroundView>
  );
}

MenuView.propTypes = propTypes;

export default MenuView;
