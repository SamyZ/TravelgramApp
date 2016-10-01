import { StyleSheet } from 'react-native';
import mainStyles from './mainStyles';

const menuStyles = StyleSheet.create({
  marginTopContainer: {
    flex: 0.095,
  },
  marginBottomContainer: {
    flex: 0.095,
  },
  itemContainer: {
    flex: 0.27,
    alignItems: 'center',
  },
  menuText: {
    marginTop: 10,
    fontSize: 20,
    color: mainStyles.color.textMenu,
  },
});

export default menuStyles;
