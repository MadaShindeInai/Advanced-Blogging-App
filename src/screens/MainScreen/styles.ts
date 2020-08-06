import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  sectionTitle: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginTop: 30,
  },
});
