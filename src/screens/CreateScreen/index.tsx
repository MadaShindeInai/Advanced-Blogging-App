import React, {FC, useState} from 'react';
import {TextInput, View, Button, StatusBar, SafeAreaView} from 'react-native';
import {styles} from './styles';

export const CreateScreen: FC<any> = ({navigation}) => {
  const [postText, setPostText] = useState('');
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4511e" />
      <View style={styles.screen}>
        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('MainScreen', {post: postText});
          }}
        />
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={styles.placeholder}
          value={postText}
          onChangeText={setPostText}
        />
      </View>
    </SafeAreaView>
  );
};
