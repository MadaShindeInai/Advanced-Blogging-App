import React from 'react';
import {StatusBar, Text} from 'react-native';
import {styles} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sectionTitle}>Hello world</Text>
    </>
  );
};

export default App;
