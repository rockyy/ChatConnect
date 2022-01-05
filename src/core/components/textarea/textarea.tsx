import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './textarea.style';

type TextAreaProps = {
  value: string;
  placeholder: string;
  handleChange: (text: string) => void;
};

export const TextArea = (props: TextAreaProps): JSX.Element => {
  const {value, placeholder, handleChange} = props;
  return (
    <View elevation={10} style={styles.container}>
      <TextInput style={styles.input} onChangeText={handleChange} value={value} placeholder={placeholder} multiline />
    </View>
  );
};
