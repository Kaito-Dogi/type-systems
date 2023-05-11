import React from 'react';
import {View} from 'react-native';
import {LargeListItem} from 'src/component/LargeListItem';
import {ListItem} from 'src/component/ListItem';
import {MultiColumnListItem} from 'src/component/MultiColumnListItem';

import {styles} from './styles';

/**
 * @package
 */
export const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <LargeListItem text="L" />
    <ListItem text="N" />
    <MultiColumnListItem texts={['M1', 'M2']} />
  </View>
);
