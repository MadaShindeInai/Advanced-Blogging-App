import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    ...THEME.fonts.regular,
    color: THEME.colors.TEXT,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    ...THEME.fonts.bold,
    color: THEME.colors.MAIN,
    textAlign: 'center',
  },
  button: {
    backgroundColor: THEME.colors.TEXT,
    width: 250,
    marginBottom: 20,
  },
  image: {
    marginTop: 15,
    width: '100%',
    height: 200,
  },
});
