import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

export const LogoTitle = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../images/gatsby-icon.png')}
    />
  );
};
