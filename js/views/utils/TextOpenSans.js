import React from 'react';
import { Text, StyleSheet } from 'react-native';

const propTypes = {
  children: React.PropTypes.any,
  style: Text.propTypes.style,
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'OpenSans-Regular',
  },
});

const TextOpenSans = (props) => <Text style={[styles.font, props.style]}>{props.children}</Text>;

TextOpenSans.propTypes = propTypes;

export default TextOpenSans;
