import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const confirmStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  confirmContainer: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  instaShareImage: {
    margin: 20,
  },
  checkboxContainer: {
    alignItems: 'center',
    flex: 0.08,
    borderColor: mainStyles.color.inputBorder,
    borderWidth: 1,
  },
  confirmTextContainer: {
    flex: 0.92,
  },
  explanationFont: {
    color: mainStyles.color.textContent,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 12,
  },
});

export default confirmStyles;
