import React from 'react';
import {Text, View} from 'react-native';
import {spacing} from 'src/style/spacing';

import {Spacer} from '../Spacer';
import {styles} from './styles';

type Props = {
  texts: string[];
};

/**
 * @package
 */
export const MultiColumnListItem: React.FC<Props> = ({texts}) => (
  <View style={styles.container}>
    {texts.map((text, index) => {
      return (
        <>
          <View style={styles.columnItem}>
            <Text style={styles.text}>{text}</Text>
          </View>
          {index < texts.length - 1 && (
            <Spacer spacing={spacing.md} direction="vertical" />
          )}
        </>
      );
    })}
  </View>
);
