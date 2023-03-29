import React from 'react';
import { Text } from 'react-native';
import { Colors } from '../themes';

const LabelText = ({ label, labelStyle, onPress, numberOfLines, ellipsizeMode, isRequired }) => {
  return (
    <Text
      onPress={onPress}
      style={labelStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >{label}<Text style={{ color: Colors.RED }}>{isRequired && ' *'}</Text></Text>
  );
};

export default LabelText;
