import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEME.colors.WHITE,
  },
  viewWrapper: {
    padding: 10,
  },
  sectionTitle: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginTop: 30,
  },
});
