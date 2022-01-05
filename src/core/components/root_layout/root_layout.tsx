import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './root_layout.styles';

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
};

export const RootLayout = (props: Props): JSX.Element => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={[styles.top]} />
      <SafeAreaView style={[styles.bottom]}>{children}</SafeAreaView>
    </View>
  );
};
