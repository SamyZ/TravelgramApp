import { StyleSheet } from 'react-native';
import mainStyles from './mainStyles';

const homeStyles = StyleSheet.create({
  marginContainer: {
    flex: 0.095,
  },
  contentContainer: {
    flex: 0.905,
    alignItems: 'center',
  },
  loginText: {
    marginTop: 10,
    fontSize: 20,
    color: mainStyles.color.textMenu,
  },
});

export default homeStyles;
