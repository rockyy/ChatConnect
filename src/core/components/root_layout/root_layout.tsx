import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './root_layout.styles';

type Props = {
  children?: React.ReactNode;
};

export const RootLayout = (props: Props): JSX.Element => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
    </View>
  );
};
