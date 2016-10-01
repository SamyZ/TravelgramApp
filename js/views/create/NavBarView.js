import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import navBarStyles from '../../styles/create/navBarStyles';
import TextOpenSans from '../utils/TextOpenSans';
import arrowLeft from '../../../assets/arrow-left.png';

const propTypes = {
  progress: React.PropTypes.number,
  navigateBackward: React.PropTypes.func,
};

const NavBarView = (props) => (
  <View style={navBarStyles.mainContainer} >
    <View style={navBarStyles.contentContainer} >
      <TouchableOpacity style={navBarStyles.backIconContainer} onPress={props.navigateBackward}>
        <Image source={arrowLeft} />
      </TouchableOpacity>
      <View style={navBarStyles.textContainer} >
        <TextOpenSans style={navBarStyles.font}>
          I create my Travelgram
        </TextOpenSans>
      </View>
      <View style={navBarStyles.marginContainer} />
    </View>
    <View style={navBarStyles.progressLineContainer} >
      <View style={[navBarStyles.progressLineLeftContainer, { flex: props.progress }]} />
      <View style={[navBarStyles.progressLineRightContainer, { flex: 1 - props.progress }]} />
    </View>
  </View>
);

NavBarView.propTypes = propTypes;

export default NavBarView;
