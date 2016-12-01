import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { getUserDetails } from '../actions/UserActions';
import FriendsListView from '../views/create/FriendsListView';

const matchingFriendsData = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const propTypes = {
  inputText: React.PropTypes.string,
  matchingFriends: React.PropTypes.object,
  selectFriend: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { friends: state.user.friends };
}

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(getUserDetails('jeremypa.colin', 'MTc2'));
  }

  filterUsers = (friends, inputText) => {
    let matchingFriends = matchingFriendsData.cloneWithRows([]);
    if (inputText !== '') {
      const matchedFriends = friends.filter((user, name) => name.includes(inputText));
      matchingFriends = matchingFriendsData.cloneWithRows(matchedFriends.toArray());
    }
    return matchingFriends;
  }

  render() {
    const matchingFriends = this.filterUsers(this.props.friends, this.props.inputText);
    return <FriendsListView friends={matchingFriends} selectFriend={this.props.selectFriend} />;
  }
}

export default connect(mapStateToProps)(FriendsContainer);
