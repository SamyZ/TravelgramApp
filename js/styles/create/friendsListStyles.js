import { StyleSheet } from 'react-native';
import { navbarHeight, marginInput, marginTop, buttonFlex, iconFlex } from './createStyles';
import mainStyles from '../mainStyles';

const contentFlex = 0.3;

const friendListStyles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: marginTop,
    bottom: 0,
    left: marginInput,
    right: marginInput
  },
  topContainer: {
    flex: buttonFlex,
  },
  contentContainer: {
    flex: contentFlex,
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1 - buttonFlex - contentFlex,
  },
  leftContainer: {
    flex: iconFlex,
  },
  rightContainer: {
    flex: 1 - iconFlex,
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
