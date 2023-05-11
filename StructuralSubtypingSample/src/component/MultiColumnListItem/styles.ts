import {StyleSheet} from 'react-native';

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
    padding: 16,
  },
  columnItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1 / 1,
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
});
