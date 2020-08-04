import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const MainScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>MainScreen</Text>
    </View>
  );
};
