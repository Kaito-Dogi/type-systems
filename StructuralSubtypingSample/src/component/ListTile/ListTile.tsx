import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  text: string;
};

export const ListTile: React.FC<Props> = ({text}) => (
  <View>
    <Text>{text}</Text>
  </View>
);
