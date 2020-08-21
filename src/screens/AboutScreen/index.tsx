import React, {FC} from 'react';
import {View, Button, StatusBar} from 'react-native';
import {styles} from './styles';

export const AboutScreen: FC<any> = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4511e" />
      <View style={styles.screen}>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({title: 'Sasha yhodi!'})}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('MainScreen')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};
