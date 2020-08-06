import React, {FC} from 'react';
import {Text, View, Button, StatusBar} from 'react-native';
import {styles} from './styles';

export const AboutScreen: FC<any> = ({route, navigation}) => {
  const {itemId, name, rate} = route.params;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4511e" />
      <View style={styles.screen}>
        <Text style={styles.title}>AboutScreen</Text>
        <Text style={styles.desc}>Person Id: {JSON.stringify(itemId)}</Text>
        <Text style={styles.desc}>Name: {JSON.stringify(name)}</Text>
        <Text style={styles.desc}>Rate: {JSON.stringify(rate)}</Text>
        <Button
          title="Go to About"
          onPress={() =>
            navigation.push('AboutScreen', {
              itemId: 1,
              name: 'Sasha',
              rate: '3%',
            })
          }
        />
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
