import React from 'react';
import {Image} from 'react-native';
import Images from '../../../assets/images/images';

export type IconProps = {
  color: string;
  size: number;
  icon: string;
};
export const Icon = ({color, size = 42, icon}: IconProps): JSX.Element => {
  const image = Images[icon];
  return <Image style={{width: size, height: size, tintColor: color}} source={image} />;
};
