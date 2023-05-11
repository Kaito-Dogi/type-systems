import React from 'react';
import {Text} from 'react-native';

import {black, styles, white} from './styles';

type Color = 'black' | 'white';

type Props = {
  color?: Color;
  children: string;
};

/**
 * @package
 */
export const BaseText: React.FC<Props> = ({children, color = 'black'}) => {
  const colorStyle = color === 'white' ? white : black;

  return <Text style={[styles.text, colorStyle]}>{children}</Text>;
};
