import React, {FC} from 'react';
import {PostList} from 'src/components/PostsList';
import {DATA} from '../../data';

export const BookedScreen: FC<any> = ({navigation}) => {
  const bookedData = DATA.filter((item) => item.booked);
  return <PostList data={bookedData} navigation={navigation} />;
};
