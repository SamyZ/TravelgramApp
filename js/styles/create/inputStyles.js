import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';
import { marginInput, iconFlex } from './createStyles';

const inputStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginRight: marginInput,
    marginLeft: marginInput,
  },
  contentContainer: {
    flexDirection: 'row',
    borderColor: mainStyles.color.inputBorder,
    borderWidth: 0.8,
    borderStyle: 'solid',
    height: 58,
  },
  logoContainer: {
    flex: iconFlex,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainStyles.color.backgroundIcon,
  },
  textContainer: {
    flex: 1 - iconFlex,
    justifyContent: 'center',
  },
  labelFont: {
    marginBottom: 10,
    fontSize: 14,
    color: mainStyles.color.textMenuAlternate,
  },
  requiredFont: {
    color: mainStyles.color.primary,
  },
});

export default inputStyles;
