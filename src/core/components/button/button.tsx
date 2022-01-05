import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './button.style';

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export const Button = (props: ButtonProps): JSX.Element => {
  const {text, handleClick} = props;
  return (
    <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
      <View style={[styles.container]}>
        <Text style={[styles.text]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};
