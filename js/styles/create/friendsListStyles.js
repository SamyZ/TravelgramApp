import { StyleSheet } from 'react-native';
import { navbarHeight, marginInput, marginTop, buttonFlex, iconFlex } from './createStyles';
import mainStyles from '../mainStyles';


const friendListStyles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    marginLeft: marginInput,
    marginRight: marginInput,
    zIndex: 10,
    flexDirection: 'row',
    top: 82,
  },
  leftContainer: {
    flex: iconFlex,
  },
  contentContainer: {
    flex: 1,
  },
  emptyListContainer: {},
  listContainer: {
    maxHeight: 200,
    borderLeftColor: mainStyles.color.inputBorder,
    borderRightColor: mainStyles.color.inputBorder,
    borderBottomColor: mainStyles.color.inputBorder,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  friendContainer: {
    backgroundColor: mainStyles.color.backgroundNeutral,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    margin: 4,
    marginLeft: 6,
    borderWidth: 0.5,
    borderColor: mainStyles.color.inputBorder,
  },
  imageSelectedContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: mainStyles.color.inputBorder,
  },
  usernameFont: {
    marginLeft: 15,
  },
});

export default friendListStyles;
