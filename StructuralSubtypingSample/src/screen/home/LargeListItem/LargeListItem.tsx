import React from 'react';
import {View} from 'react-native';
import {BaseText} from 'src/component/BaseText';

import {styles} from './styles';

type Props = {
  text: string;
};

/**
 * @package
 */
export const LargeListItem: React.FC<Props> = ({text}) => (
  <View style={styles.container}>
    <BaseText color="white">{text}</BaseText>
  </View>
);
