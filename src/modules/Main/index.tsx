import React, {FC} from 'react';
import {StatusBar, Text} from 'react-native';
import {styles} from './styles';

export const Main: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sectionTitle}>Hello world</Text>
    </>
  );
};
