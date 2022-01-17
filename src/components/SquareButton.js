import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

const SquareButton = ({styles, toggleSwitch, emoji, text, number, enable}) => {
  return (
    <TouchableOpacity
      style={styles.reviewContainter}
      onPress={() => toggleSwitch(number)}>
      <View style={styles.iconContaner}>
        {emoji}
        {enable}
      </View>
      <Text style={styles.textIcon}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SquareButton;
