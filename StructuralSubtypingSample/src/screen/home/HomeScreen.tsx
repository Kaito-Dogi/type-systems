import React from 'react';
import {FlatList} from 'react-native';
import {Spacer} from 'src/component/Spacer';

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
  <FlatList<HomeScreenUiModel>
    style={styles.container}
    data={uiModels}
    renderItem={item => <HomeScreenUiModelBinder item={item.item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => (
      <Spacer spacing={16} direction="horizontal" />
    )}
  />
);
