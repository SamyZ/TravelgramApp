import React from 'react';
import {
   View,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   DatePickerAndroid,
   Image,
} from 'react-native';
import CreateStyles,
 { usernameInput,
  travelgramNameInput,
} from '../../styles/create/createStyles';
import mainStyles from '../../styles/mainStyles';
import friendsListStyles from '../../styles/create/friendsListStyles';
import FriendsContainer from '../../containers/FriendsContainer';
import NavBarView from './NavBarView';
import InputView from './InputView';
import InputTouchable from './InputTouchable';
import TextOpenSans from '../utils/TextOpenSans';
import iconArobase from '../../../assets/icon-arobase.png';
import iconPen from '../../../assets/icon-pen.png';
import iconCal from '../../../assets/icon-cal.png';
import { Map } from 'immutable';

const departureDateInput = StyleSheet.create({});
const returnDateInput = StyleSheet.create({});

const propTypes = {
  navigateForward: React.PropTypes.func,
};

class CreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureDate: new Date(),
      returnDate: new Date(),
      departureDateFont: CreateStyles.placeholderFont,
      returnDateFont: CreateStyles.placeholderFont,
      friendsFilterText: '',
      selectedFriends: new Map(),
    };
  }

  navigateBack = () => this.props.navigator.pop();

  async showDatePicker(name) {
    const newState = this.state;
    const options = {};
    if (name === 'returnDate') {
      options.minDate = this.state.departureDate;
    }
    const { action, year, month, day } = await DatePickerAndroid.open(options);
    if (action !== DatePickerAndroid.dismissedAction) {
      if (name === 'returnDate') {
        newState.returnDate = new Date(year, month, day);
        newState.returnDateFont = CreateStyles.dateSetFont;
      } else {
        newState.departureDate = new Date(year, month, day);
        newState.returnDate = new Date(year, month, day);
        newState.departureDateFont = CreateStyles.dateSetFont;
      }
      this.setState(newState);
    }
  }

  updateFriendsFilterText = (inputText) => {
    this.setState({ friendsFilterText: inputText })
  }

  selectFriend = (friend) => {
    this.setState({
      selectedFriends: this.state.selectedFriends.set(friend.id, friend),
      friendsFilterText: '',
    });
  }

  removeFriend = (id) => {
    this.setState({ selectedFriends: this.state.selectedFriends.remove(id) });
  }

  render = () => {
    return (
      <View style={CreateStyles.mainContainer}>
        <View style={CreateStyles.inputContainer} >
          <InputView label="I am going with" logoSource={iconArobase} style={usernameInput}>
            <TextInput
              style={CreateStyles.inputFont}
              underlineColorAndroid="transparent"
              placeholder="Instagram username"
              placeholderTextColor={mainStyles.color.inputPlaceholder}
              onChangeText={this.updateFriendsFilterText}
              value={this.state.friendsFilterText}
            />
          </InputView>
          <View style={CreateStyles.selectedFriendsContainer}>
            {this.state.selectedFriends.map(friend => (
              <View>
                  <Image
                    style= {friendsListStyles.imageSelectedContainer}
                    source={{ uri: friend.picture }}
                  >
                  </Image>
                  <TouchableOpacity style={CreateStyles.removeFriendContainer} onPress={() => {this.removeFriend(friend.id)}} >
                    <TextOpenSans style={CreateStyles.removeFont}>x</TextOpenSans>
                  </TouchableOpacity>
                </View>
              ))
            }
          </View>
          <InputView label="Your Travelgram name" logoSource={iconPen} style={travelgramNameInput} required>
            <TextInput
              style={CreateStyles.inputFont}
              underlineColorAndroid="transparent"
              placeholder="50 characters maximum"
              placeholderTextColor={mainStyles.color.inputPlaceholder}
              maxLength={50}
              onChangeText={(name) => { this.setState({ name }); }}
              value={this.state.name}
            />
          </InputView>
          <InputTouchable
            label="Departure date"
            name="departureDate"
            logoSource={iconCal}
            style={departureDateInput}
            onPress={(name) => this.showDatePicker(name)}
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
            style={returnDateInput}
            onPress={(name) => this.showDatePicker(name)}
          >
            <TextOpenSans style={StyleSheet.flatten(this.state.returnDateFont)}>
              {this.state.returnDate.toLocaleDateString()}
            </TextOpenSans>
          </InputTouchable>
        </View>
        <FriendsContainer inputText={this.state.friendsFilterText} selectFriend={this.selectFriend}/>
        <View style={CreateStyles.buttonOuterContainer}>
          <TouchableOpacity style={CreateStyles.buttonContainer} onPress={this.props.navigateForward}>
            <TextOpenSans style={StyleSheet.flatten(CreateStyles.buttonFont)}>
              It's almost over!
            </TextOpenSans>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CreateView.propTypes = propTypes;

export default CreateView;
