import React, {FC} from 'react';
import {View, StatusBar, SafeAreaView, FlatList} from 'react-native';
import {DATA} from '../../data';
import {Post} from '../../components/Post';
import {styles} from './styles';
import {THEME} from '../../theme';

export const MainScreen: FC<any> = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.MAIN} />
      <View style={styles.viewWrapper}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return <Post item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
