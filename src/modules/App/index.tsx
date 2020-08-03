import React from 'react';
import {StyleSheet, StatusBar, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'Kalam-Bold',
    fontSize: 44,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 30,
  },
  sectionTitle2: {
    fontFamily: 'Kalam-Light',
    fontSize: 24,
    color: Colors.black,
  },
  sectionTitle3: {
    fontFamily: 'PermanentMarker-Regular',
    fontSize: 24,
    color: Colors.black,
  },
  sectionTitle4: {
    fontFamily: 'RobotoMono-ThinItalic',
    fontSize: 24,
    color: Colors.black,
  },
  sectionDescription: {
    fontFamily: 'RobotoMono-BoldItalic',
    marginTop: 8,
    fontSize: 18,
    color: Colors.dark,
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sectionTitle}>Hello world</Text>
    </>
  );
};

export default App;
