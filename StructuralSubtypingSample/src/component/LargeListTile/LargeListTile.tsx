import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  text: string;
};

/**
 * @package
 */
export const LargeListTile: React.FC<Props> = ({text}) => (
  <View>
    <Text>{text}</Text>
  </View>
);
