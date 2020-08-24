import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {},
  sectionTitle: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginTop: 30,
  },
  placeholder: {
    height: 200,
    padding: 10,
    backgroundColor: 'white',
  },
});
