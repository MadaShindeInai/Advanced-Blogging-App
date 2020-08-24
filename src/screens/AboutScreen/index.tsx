import React, {FC} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {styles} from './styles';

export const AboutScreen: FC<any> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4511e" />
      <View style={styles.screen}>
        <Text style={styles.title}>This is the best blogging app ever</Text>
        <Text style={styles.desc}>Developer: MadaShindeInai</Text>
        <Text style={styles.desc}>Version 1.0.0</Text>
      </View>
    </>
  );
};
