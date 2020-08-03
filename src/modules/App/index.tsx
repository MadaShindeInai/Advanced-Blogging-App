import React from 'react';
import {StyleSheet, StatusBar, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sectionTitle}>Hello world</Text>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'Kalam-Bold',
    fontSize: 44,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 30,
  },
});
