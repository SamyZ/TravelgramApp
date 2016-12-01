import { StyleSheet } from 'react-native';
import mainStyles from './mainStyles';

const homeStyles = StyleSheet.create({
  marginTopContainer: {
    flex: 0.15,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginText: {
    paddingTop: 10,
    fontSize: 20,
    color: mainStyles.color.textMenu,
  },
});

export default homeStyles;
