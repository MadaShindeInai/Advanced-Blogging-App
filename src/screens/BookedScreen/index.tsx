import React, {FC} from 'react';
import {PostList} from 'src/components/PostsList';
import {useSelector} from 'react-redux';
import {State} from 'src/types';

export const BookedScreen: FC<any> = ({navigation}) => {
  const bookedPosts = useSelector((state: State) => state.post.bookedPosts);
  return <PostList data={bookedPosts} navigation={navigation} />;
};
