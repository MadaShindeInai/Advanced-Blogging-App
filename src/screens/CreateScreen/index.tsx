import React, {FC, useState} from 'react';
import {
  TextInput,
  Text,
  ScrollView,
  Button,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addPost} from 'src/actions/postActions';
import {styles} from './styles';

export const CreateScreen: FC<any> = ({navigation}) => {
  const [postText, setPostText] = useState('');
  const dispatch = useDispatch();
  const img = require('src/images/3.png');
  const saveHandler = () => {
    const post = {
      id: 34,
      date: new Date().toJSON(),
      text: postText,
      booked: false,
      uri: img,
    };
    dispatch(addPost(post));
    navigation.goBack();
    // navigation.navigate('MainScreen', {post: postText});
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.screen}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text style={styles.sectionTitle}>Create New Post</Text>
            <TextInput
              multiline
              placeholder="What's on your mind?"
              style={styles.textarea}
              value={postText}
              onChangeText={setPostText}
            />
            <Image style={styles.img} source={img} />
            <Button title="Done" onPress={saveHandler} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};
