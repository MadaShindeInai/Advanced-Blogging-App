import React, {FC} from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {DATA} from '../../data';

export const PostScreen: FC<any> = ({route}) => {
  const {postId} = route.params;
  const post = DATA.find((item) => item.id === postId);
  // const [count, setCount] = React.useState(0);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableHighlight
  //         activeOpacity={0.5}
  //         underlayColor="#f4511e"
  //         onPress={() => setCount((c) => c + 1)}>
  //         <Text style={styles.btnFont}>UpdateCount</Text>
  //       </TouchableHighlight>
  //     ),
  //   });
  // }, [navigation]);
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
          onPress: () => {},
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
