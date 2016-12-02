import React from 'react';
import { View, Image } from 'react-native';
import inputStyles from '../../styles/create/inputStyles';
import TextOpenSans from '../utils/TextOpenSans';
import FriendsContainer from '../../containers/FriendsContainer';

const propTypes = {
  label: React.PropTypes.string.isRequired,
  logoSource: React.PropTypes.number.isRequired,
  children: React.PropTypes.object,
  required: React.PropTypes.bool,
  friendsContainer: React.PropTypes.bool,
  friendsFilterText: React.PropTypes.string,
  selectFriend: React.PropTypes.func,
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
    {props.friendsContainer ?
      <View style={inputStyles.friendsContainer} >
        <FriendsContainer inputText={props.friendsFilterText} selectFriend={props.selectFriend} />
      </View>
    : false}
  </View>
);

InputView.propTypes = propTypes;

export default InputView;
