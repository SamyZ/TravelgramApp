import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';
import { navbarHeight } from './createStyles';

const navBarStyles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: navbarHeight,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: mainStyles.color.primary,
    alignItems: 'center',
  },
  backIconContainer: {
    flex: 0.18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.64,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  marginContainer: {
    flex: 0.18,
  },
  progressLineContainer: {
    flexDirection: 'row',
  },
  progressLineLeftContainer: {
    borderBottomColor: mainStyles.color.progressLine,
    borderBottomWidth: 5,
  },
  progressLineRightContainer: {
    borderBottomColor: mainStyles.color.backgroundNeutral,
    borderBottomWidth: 5,
  },
  font: {
    fontSize: 20,
    color: mainStyles.color.textMenu,
  },

});

export default navBarStyles;
