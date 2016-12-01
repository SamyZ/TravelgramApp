import React from 'react';
import {
   View,
   Image,
   ListView,
   TouchableOpacity,
} from 'react-native';
import friendsListStyles from '../../styles/create/friendsListStyles';
import TextOpenSans from '../utils/TextOpenSans';

const FriendsListView = (props) => {
  const listContainerStyle = props.friends.getRowCount() === 0 ? friendsListStyles.emptyListContainer : friendsListStyles.listContainer;
  return (
    <View style={friendsListStyles.mainContainer}>
      <View style={friendsListStyles.leftContainer} />
      <View style={friendsListStyles.contentContainer}>
        <View style={listContainerStyle}>
          <ListView
            enableEmptySections
            keyboardShouldPersistTaps
            dataSource={props.friends}
            renderRow={rowData => (
              <TouchableOpacity onPress={() => props.selectFriend(rowData)}>
                <View style={friendsListStyles.friendContainer}>
                  <Image
                    style={friendsListStyles.imageContainer}
                    source={{ uri: rowData.picture }}
                  />
                  <TextOpenSans style={friendsListStyles.usernameFont}>{ rowData.username} </TextOpenSans>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default FriendsListView;
