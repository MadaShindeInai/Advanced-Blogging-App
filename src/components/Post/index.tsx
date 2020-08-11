import React, {FC} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {THEME} from '../../theme';

type PostProps = {
  item: any;
};

export const Post: FC<PostProps> = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.image} source={item.uri}>
        <View style={styles.textWrap}>
          <Text>{item.date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginBottom: 15, overflow: 'hidden'},
  image: {width: '100%', height: 200},
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {...THEME.fonts.title, color: '#ffffff'},
});
