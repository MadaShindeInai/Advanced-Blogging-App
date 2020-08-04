import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const CreateScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>CreateScreen</Text>
    </View>
  );
};
