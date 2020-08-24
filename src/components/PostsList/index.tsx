import React, {FC} from 'react';
import {View, StatusBar, SafeAreaView, FlatList} from 'react-native';
import {Post} from '../Post';
import {styles} from './styles';
import {THEME} from '../../theme';

export const PostList: FC<any> = ({data, navigation}) => {
  const openPost = (item: any) => {
    navigation.navigate('PostScreen', {
      postId: item.id,
      postDate: item.date,
      postBooked: item.booked,
    });
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.MAIN} />
      <View style={styles.viewWrapper}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return <Post item={item} openPost={openPost} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
