import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const PostScreen: FC<any> = ({route}) => {
  const {postId, postDate} = route.params;
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

  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>{postId}</Text>
      <Text style={styles.sectionTitle}>{postDate}</Text>
    </View>
  );
};
