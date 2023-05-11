import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

type Props = {
  text: string;
};

/**
 * @package
 */
export const ListItem: React.FC<Props> = ({text}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);
