import React from 'react';
import {Text, View} from 'react-native';

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
            <Spacer spacing={16} direction="horizontal" />
          )}
        </>
      );
    })}
  </View>
);
