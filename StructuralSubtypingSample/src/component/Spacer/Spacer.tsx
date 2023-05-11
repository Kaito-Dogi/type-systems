import React from 'react';
import {View} from 'react-native';

import {horizontal, vertical} from './styles';

type Direction = 'horizontal' | 'vertical';

type Props = {
  spacing: number;
  direction: Direction;
};

/**
 * @package
 */
export const Spacer: React.FC<Props> = ({direction, spacing}) =>
  direction === 'horizontal' ? (
    <View style={horizontal(spacing)} />
  ) : (
    <View style={vertical(spacing)} />
  );
