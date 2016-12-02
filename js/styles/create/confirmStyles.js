import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const confirmStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  confirmContainer: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
