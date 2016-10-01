import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const confirmStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  confirmContainer: {
    marginTop: 20,
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
    marginTop: 40,
    marginBottom: 40,
    margin: 20,
    fontSize: 12,
  },
});

export default confirmStyles;
