import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';
import {THEME} from 'src/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeaderIcon = (props: any) => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      IconComponent={Icon}
      color={Platform.OS === 'android' ? THEME.colors.WHITE : THEME.colors.MAIN}
    />
  );
};
