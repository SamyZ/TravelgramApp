import React from 'react';
import { Image } from 'react-native';
import backgroundStyles from '../styles/backgroundStyles';
import backgroundImage from '../../assets/background.jpg';

const propTypes = {
  children: React.PropTypes.any,
};

const BackgroundView = props => (
  <Image
    source={backgroundImage}
    style={backgroundStyles.imageContainer}
  >
    {props.children}
  </Image>
);

BackgroundView.propTypes = propTypes;

export default BackgroundView;
