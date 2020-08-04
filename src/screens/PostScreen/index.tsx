import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const PostScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>PostScreen</Text>
    </View>
  );
};
