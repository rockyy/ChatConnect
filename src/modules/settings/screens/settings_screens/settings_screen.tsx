import React from 'react';
import {Text} from 'react-native';
import {AppLayout} from '@core/components';
import {styles} from './settings_screen.style';

export const SettingsScreen = (): JSX.Element => (
  <AppLayout style={styles.comingSoonLayout}>
    <Text>Coming soon...</Text>
  </AppLayout>
);
