import React from 'react';
import {
   View,
   TouchableOpacity,
   Image,
   StyleSheet,
   Linking,
} from 'react-native';
import createStyles from '../../styles/create/createStyles';
import createdStyles from '../../styles/create/createdStyles';
import TextOpenSans from '../utils/TextOpenSans';

const propTypes = {
  navigateForward: React.PropTypes.func,
};

class CreatedView extends React.Component {

  goToUrl = () => {
    const url = 'http://google.fr';
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        console.log(`Can\'t handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render = () => {
    return (
      <View style={createStyles.mainContainer}>
        <View style={createdStyles.contentContainer}>
          <TextOpenSans style={createdStyles.titleFont}>
            Congratulations! Your Travelgram has been created!
          </TextOpenSans>
          <TextOpenSans style={createdStyles.subTitleFont}>
            Here is the link to access your Travelgram, share it with your friends!
          </TextOpenSans>
          <View style={createdStyles.linkContainer}>
            <TextOpenSans style={createdStyles.linkFont} onPress={this.goToUrl} >
                google.com
            </TextOpenSans>
          </View>
        </View>
      </View>
    );
  }
}

CreatedView.propTypes = propTypes;

export default CreatedView;
