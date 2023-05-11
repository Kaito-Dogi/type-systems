import React from 'react';
import {View} from 'react-native';
import {BaseText} from 'src/component/BaseText';
import {Spacer} from 'src/component/Spacer';
import {spacing} from 'src/style/spacing';

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
            <BaseText>{text}</BaseText>
          </View>
          {index < texts.length - 1 && (
            <Spacer spacing={spacing.md} direction="vertical" />
          )}
        </>
      );
    })}
  </View>
);
