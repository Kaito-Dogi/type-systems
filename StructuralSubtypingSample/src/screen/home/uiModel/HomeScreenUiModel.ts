import {LargeListItemUiModel} from './LargeListItemUiModel';
import {ListItemUiModel} from './ListItemUiModel';
import {MultiColumnListItemUiModel} from './MultiColumnListItemUiModel';

/**
 * @package
 */
export type HomeScreenUiModel =
  | ListItemUiModel
  | LargeListItemUiModel
  | MultiColumnListItemUiModel;
