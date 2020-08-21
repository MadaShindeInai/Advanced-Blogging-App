import React, {FC} from 'react';
import {PostList} from 'src/components/PostsList';
import {DATA} from '../../data';

export const MainScreen: FC<any> = ({navigation}) => {
  return <PostList data={DATA} navigation={navigation} />;
};
