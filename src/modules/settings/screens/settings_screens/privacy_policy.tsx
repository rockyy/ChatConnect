import React from 'react';
import {WebView} from 'react-native-webview';
import {config} from '@core/config';
import {AppLayout, LoadingScreen} from '@core/components';
import {styles} from './settings_screen.style';

export const Privacy = (): JSX.Element => {
  const {privacyUrl} = config.settings;
  return (
    <AppLayout style={styles.container}>
      <WebView
        source={{uri: privacyUrl}}
        startInLoadingState
        renderLoading={() => <LoadingScreen />}
      />
    </AppLayout>
  );
};
