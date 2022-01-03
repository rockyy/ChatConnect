import React from 'react';
import {Text} from 'react-native';
import {AppLayout} from '@core/components';
import {styles} from './connect_screen.styles';

export const ConnectScreen = (): JSX.Element => (
  <AppLayout style={styles.noDataLayout}>
    <Text>Chat Connect</Text>
  </AppLayout>
);
