import React, {Fragment} from 'react';
import {SafeAreaView, View, ViewProps} from 'react-native';

import {styles} from './app_layout_styles';

type Props = ViewProps & {
  children?: React.ReactNode;
  safeArea?: boolean;
};

export const AppLayout = (props: Props): JSX.Element => {
  const {children, safeArea = true, style, ...other} = props;
  const Container = safeArea ? SafeAreaView : Fragment;
  return (
    <Container style={styles.container}>
      <View style={[styles.layout, style]} {...other}>
        {children}
      </View>
    </Container>
  );
};
