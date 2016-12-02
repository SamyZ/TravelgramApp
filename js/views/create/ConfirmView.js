import React from 'react';
import {
   View,
   TouchableOpacity,
   Image,
   StyleSheet,
} from 'react-native';
import createStyles from '../../styles/create/createStyles';
import confirmStyles from '../../styles/create/confirmStyles';
import instaShare from '../../../assets/instaShare.png';
import checked from '../../../assets/checked.png';
import unchecked from '../../../assets/unchecked.png';
import TextOpenSans from '../utils/TextOpenSans';

const propTypes = {
  navigateForward: React.PropTypes.func,
};

class ConfirmView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  onCheck = () => {
    this.setState({ checked: !this.state.checked });
  }

  render = () => (
    <View style={createStyles.mainContainer}>
      <View style={confirmStyles.contentContainer}>
        <TextOpenSans style={confirmStyles.explanationFont}>
            In order for your pictures to be geolocated on the map, add a location when you publish them on Instagram !
          </TextOpenSans>
        <Image source={instaShare} style={confirmStyles.instaShareImage} />
        <TouchableOpacity style={confirmStyles.confirmContainer} onPress={this.onCheck} >
          <View style={confirmStyles.checkboxContainer}>
            <Image source={this.state.checked ? checked : unchecked} />
          </View>
          <View style={confirmStyles.confirmTextContainer}>
            <TextOpenSans style={confirmStyles.explanationFont}>
              {'Ticking this box makes your Travelgram private and it will not show up in the "Latest Travelgram" section.'}
            </TextOpenSans>
          </View>
        </TouchableOpacity>
      </View>
      <View style={createStyles.buttonOuterContainer}>
        <TouchableOpacity style={createStyles.buttonContainer} onPress={this.props.navigateForward}>
          <TextOpenSans style={StyleSheet.flatten(createStyles.buttonFont)}>
            {"I got it, let's go !"}
          </TextOpenSans>
        </TouchableOpacity>
      </View>
    </View>
    )
}

ConfirmView.propTypes = propTypes;

export default ConfirmView;
