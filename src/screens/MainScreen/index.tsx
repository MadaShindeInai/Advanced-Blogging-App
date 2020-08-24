import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PostList} from 'src/components/PostsList';
import {loadPosts} from 'src/actions/postActions';
import {State} from 'src/types';

export const MainScreen: FC<any> = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  const allPosts = useSelector((state: State) => state.post.allPosts);
  return <PostList data={allPosts} navigation={navigation} />;
};
