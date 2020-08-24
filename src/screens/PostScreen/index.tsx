import React, {FC} from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {State} from 'src/types';
import {removePost} from 'src/actions/postActions';
import {styles} from './styles';

export const PostScreen: FC<any> = ({route, navigation}) => {
  const {postId} = route.params;
  const dispatch = useDispatch();
  const post = useSelector((state: State) =>
    state.post.allPosts.find((item) => item.id === postId),
  );

  const handleRemove = () => {
    Alert.alert(
      'Do you really want to delete this post?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            navigation.goBack();
            dispatch(removePost(postId));
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      {post ? (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image style={styles.image} source={post.uri} />
            <Text style={styles.sectionTitle}>{post.text}</Text>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={0.5}
              onPress={handleRemove}>
              <Text style={styles.buttonText}>Delete Post</Text>
            </TouchableHighlight>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <Text style={styles.sectionTitle}>{postId}</Text>
      )}
    </>
  );
};
