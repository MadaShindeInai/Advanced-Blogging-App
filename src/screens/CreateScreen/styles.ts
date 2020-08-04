import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginTop: 30,
  },
});
