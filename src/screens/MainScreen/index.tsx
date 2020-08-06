import React, {FC} from 'react';
import {Text, View, Button, StatusBar, SafeAreaView} from 'react-native';
import {styles} from './styles';

export const MainScreen: FC<any> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <View>
        <Text style={styles.sectionTitle}>
          {route.params?.post || 'MainScreen'}
        </Text>
        <Button
          title="Go to About"
          onPress={() =>
            navigation.navigate('AboutScreen', {
              name: 'Sasha',
              rate: '3%',
            })
          }
        />
        <Button
          title="Create Screen ===>"
          onPress={() => navigation.navigate('CreateScreen')}
        />
      </View>
    </SafeAreaView>
  );
};
