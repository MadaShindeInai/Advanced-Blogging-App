import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {THEME} from '../../theme';

type PostProps = {
  item: any;
};

export const Post: FC<PostProps> = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.wrapper}>
        <ImageBackground style={styles.image} source={item.uri}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{item.date}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderBottomColor: THEME.colors.BORDER,
  },
  image: {width: '100%', height: 200},
  textWrap: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {...THEME.fonts.regular, color: THEME.colors.TEXT},
});
