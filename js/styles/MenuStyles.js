import { StyleSheet } from 'react-native';
import mainStyles from './mainStyles';

const menuStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  itemContainer: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    paddingTop: 10,
    color: mainStyles.color.textMenu,
  },
});

export default menuStyles;
