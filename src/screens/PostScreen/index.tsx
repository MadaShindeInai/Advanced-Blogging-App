import React, {FC, useLayoutEffect} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {styles} from './styles';

export const PostScreen: FC<any> = ({navigation}) => {
  const [count, setCount] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#f4511e"
          onPress={() => setCount((c) => c + 1)}>
          <Text style={styles.btnFont}>UpdateCount</Text>
        </TouchableHighlight>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Count: {count}</Text>
    </View>
  );
};
