import React from 'react';
import {
   View,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   DatePickerAndroid,
   Image,
} from 'react-native';
import { Map } from 'immutable';
import CreateStyles, {
  usernameInput,
  travelgramNameInput,
} from '../../styles/create/createStyles';
import mainStyles from '../../styles/mainStyles';
import friendsListStyles from '../../styles/create/friendsListStyles';
import InputView from './InputView';
import InputTouchable from './InputTouchable';
import TextOpenSans from '../utils/TextOpenSans';
import iconArobase from '../../../assets/icon-arobase.png';
import iconPen from '../../../assets/icon-pen.png';
import iconCal from '../../../assets/icon-cal.png';

const propTypes = {
  navigator: React.PropTypes.object,
  navigateForward: React.PropTypes.func,
};

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureDate: new Date(),
      returnDate: new Date(),
      departureDateFont: CreateStyles.placeholderFont,
      returnDateFont: CreateStyles.placeholderFont,
      friendsFilterText: '',
      selectedFriends: new Map(),
      namePlaceholder: mainStyles.color.inputPlaceholder,
    };
  }

  navigateBack = () => this.props.navigator.pop();

  async showDatePicker(name) {
    const newState = this.state;
    const options = {};
    if (name === 'returnDate') {
      const minDate = new Date(this.state.departureDate);
      minDate.setDate(minDate.getDate() + 1);
      options.minDate = minDate;
    }
    const { action, year, month, day } = await DatePickerAndroid.open(options);
    if (action !== DatePickerAndroid.dismissedAction) {
      if (name === 'returnDate') {
        newState.returnDate = new Date(year, month, day);
        newState.returnDateFont = CreateStyles.dateSetFont;
      } else {
        newState.departureDate = new Date(year, month, day);
        const returnDate = new Date(year, month, day);
        returnDate.setDate(returnDate.getDate() + 1);
        newState.returnDate = returnDate;
        newState.departureDateFont = CreateStyles.dateSetFont;
      }
      this.setState(newState);
    }
  }

  updateFriendsFilterText = (inputText) => {
    this.setState({ friendsFilterText: inputText });
  }

  selectFriend = (friend) => {
    this.setState({
      selectedFriends: this.state.selectedFriends.set(friend.id, friend),
      friendsFilterText: '',
    });
    this.instagramUsernameInput.blur();
  }

  removeFriend = (id) => {
    this.setState({ selectedFriends: this.state.selectedFriends.remove(id) });
  }

  createTravelgram = () => {
    if (true || this.state.name && this.state.departureDateFont !== CreateStyles.placeholderFont) {
      this.props.navigateForward();
    } else {
      const namePlaceholder = this.state.name ? this.state.namePlaceholder : mainStyles.color.missingFields;
      const departureDateFont = this.state.departureDateFont !== CreateStyles.placeholderFont ?
        this.state.departureDateFont : CreateStyles.missingFont;
      this.setState({ namePlaceholder, departureDateFont });
    }
  }

  render = () => (
    <View style={CreateStyles.mainContainer}>
      <View style={CreateStyles.contentContainer}>
        <InputView
          label="I am going with"
          logoSource={iconArobase}
          style={usernameInput}
          friendsContainer
          friendsFilterText={this.state.friendsFilterText}
          selectFriend={this.selectFriend}
        >
          <TextInput
            ref={(comp) => { this.instagramUsernameInput = comp; }}
            style={CreateStyles.inputFont}
            underlineColorAndroid="transparent"
            placeholder="Instagram username"
            placeholderTextColor={mainStyles.color.inputPlaceholder}
            onChangeText={this.updateFriendsFilterText}
            value={this.state.friendsFilterText}
          />
        </InputView>
        <View style={CreateStyles.selectedFriendsContainer}>
          {this.state.selectedFriends.valueSeq().map(friend => (
            <View key={friend.id}>
              <Image
                style={friendsListStyles.imageSelectedContainer}
                source={{ uri: friend.picture }}
              />
              <TouchableOpacity style={CreateStyles.removeFriendContainer} onPress={() => { this.removeFriend(friend.id); }} >
                <TextOpenSans style={CreateStyles.removeFont}>x</TextOpenSans>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <InputView label="Your Travelgram name" logoSource={iconPen} style={travelgramNameInput} required>
          <TextInput
            style={CreateStyles.inputFont}
            underlineColorAndroid="transparent"
            placeholder="50 characters maximum"
            placeholderTextColor={this.state.namePlaceholder}
            maxLength={50}
            onChangeText={(name) => { this.setState({ name }); }}
            value={this.state.name}
          />
        </InputView>
        <InputTouchable
          label="Departure date"
          name="departureDate"
          logoSource={iconCal}
          onPress={name => this.showDatePicker(name)}
          required
        >
          <TextOpenSans style={this.state.departureDateFont}>
            {this.state.departureDate.toLocaleDateString()}
          </TextOpenSans>
        </InputTouchable>
        <InputTouchable
          label="Return date"
          name="returnDate"
          logoSource={iconCal}
          onPress={name => this.showDatePicker(name)}
        >
          <TextOpenSans style={StyleSheet.flatten(this.state.returnDateFont)}>
            {this.state.returnDate.toLocaleDateString()}
          </TextOpenSans>
        </InputTouchable>
      </View>
      <View style={CreateStyles.buttonOuterContainer}>
        <TouchableOpacity style={CreateStyles.buttonContainer} onPress={this.createTravelgram}>
          <TextOpenSans style={StyleSheet.flatten(CreateStyles.buttonFont)}>
            {"It's almost over!"}
          </TextOpenSans>
        </TouchableOpacity>
      </View>
    </View>
    )
}

SettingsView.propTypes = propTypes;

export default SettingsView;
