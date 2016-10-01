import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import inputStyles from '../../styles/create/inputStyles';
import TextOpenSans from '../utils/TextOpenSans';

const propTypes = {
  label: React.PropTypes.string.isRequired,
  logoSource: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.object,
  required: React.PropTypes.bool,
  style: React.PropTypes.object,
  onPress: React.PropTypes.func.isRequired,
};

const InputTouchable = (props) => (
  <View style={[inputStyles.mainContainer, props.style.mainContainer]}>
    <TextOpenSans style={inputStyles.labelFont}>
      {props.label}
      {props.required ? (<TextOpenSans style={inputStyles.requiredFont}>{' *'}</TextOpenSans>) : false}
    </TextOpenSans>
    <TouchableOpacity style={inputStyles.contentContainer} onPress={() => props.onPress(props.name)} >
      <View style={inputStyles.logoContainer}>
        <Image source={props.logoSource} />
      </View>
      <View style={inputStyles.textContainer}>
        {props.children}
      </View>
    </TouchableOpacity>
  </View>
);

InputTouchable.propTypes = propTypes;

export default InputTouchable;
