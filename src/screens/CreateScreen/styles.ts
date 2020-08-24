import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'yellow',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  screen: {},
  sectionTitle: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
});
