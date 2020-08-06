import React from 'react';
import {Image} from 'react-native';

export const LogoTitle = () => {
  return (
    <>
      <Image
        style={{width: 100, height: 30}}
        source={require('../../images/gatsby-icon.png')}
      />
    </>
  );
};
