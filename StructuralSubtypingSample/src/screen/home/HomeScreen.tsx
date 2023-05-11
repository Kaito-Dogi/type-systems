import React from 'react';
import {FlatList, View} from 'react-native';

import {HomeScreenUiModelBinder} from './HomeScreenUiModelBinder';
import {styles} from './styles';
import {HomeScreenUiModel} from './uiModel';

type Props = {
  uiModels: HomeScreenUiModel[];
};

/**
 * @package
 */
export const HomeScreen: React.FC<Props> = ({uiModels}) => (
  <View style={styles.container}>
    <FlatList data={uiModels} renderItem={HomeScreenUiModelBinder} />
  </View>
);
