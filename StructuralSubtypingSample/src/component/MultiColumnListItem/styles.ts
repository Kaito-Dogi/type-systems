import {StyleSheet} from 'react-native';
import {spacing} from 'src/style/spacing';

/**
 * @package
 */
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'blue',
    padding: spacing.md,
  },
  columnItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1 / 1,
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
});
