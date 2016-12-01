import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const createdStyles = StyleSheet.create({
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  linkContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: mainStyles.color.backgroundLink,
  },
  titleFont: {
    color: mainStyles.color.textContent,
    marginTop: 50,
    fontSize: 16,
  },
  subTitleFont: {
    color: mainStyles.color.textContent,
    marginTop: 20,
    fontSize: 11,
  },
  linkFont: {
    color: mainStyles.color.primary,
    fontSize: 12,
  },
});

export default createdStyles;
