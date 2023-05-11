import React from 'react';

import {LargeListItem} from './LargeListItem';
import {ListItem} from './ListItem';
import {MultiColumnListItem} from './MultiColumnListItem';
import {HomeScreenUiModel} from './uiModel';

type Props = {
  item: HomeScreenUiModel;
};

/**
 * @package
 */
export const HomeScreenUiModelBinder: React.FC<Props> = ({item}) => {
  switch (item.type) {
    case 'item':
      return <ListItem text={item.text} />;
    case 'large':
      return <LargeListItem text={item.text} />;
    case 'multi-column':
      return <MultiColumnListItem texts={item.texts} />;
  }
};
