import { StyleSheet } from 'react-native';
import mainStyles from './mainStyles';

const menuStyles = StyleSheet.create({
  marginTopContainer: {
    flex: 0.20,
  },
  marginBottomContainer: {
    flex: 0.10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },

  menuText: {
    fontSize: 20,
    paddingTop: 10,
    color: mainStyles.color.textMenu,
  },
});

export default menuStyles;
