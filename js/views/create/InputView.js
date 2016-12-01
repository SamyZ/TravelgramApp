import React from 'react';
import { View, Image } from 'react-native';
import inputStyles from '../../styles/create/inputStyles';
import TextOpenSans from '../utils/TextOpenSans';

const propTypes = {
  label: React.PropTypes.string.isRequired,
  logoSource: React.PropTypes.number.isRequired,
  children: React.PropTypes.object,
  required: React.PropTypes.bool,
};

const InputView = props => (
  <View style={inputStyles.mainContainer}>
    <TextOpenSans style={inputStyles.labelFont}>
      {props.label}
      {props.required ? (<TextOpenSans style={inputStyles.requiredFont}>{' *'}</TextOpenSans>) : false}
    </TextOpenSans>
    <View style={inputStyles.contentContainer}>
      <View style={inputStyles.logoContainer}>
        <Image source={props.logoSource} />
      </View>
      <View style={inputStyles.textContainer}>
        {props.children}
      </View>
    </View>
  </View>
);

InputView.propTypes = propTypes;

export default InputView;
