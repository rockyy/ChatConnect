import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import {config} from '@core/config';
import {TabNavigatorParamsList} from '@core/interfaces';
import {AppLayout, LoadingScreen} from '@core/components';
import {styles} from './settings_screen.style';

interface ProfileProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Privacy'>;
}

export const Privacy: React.FC<ProfileProps> = ({navigation}) => {
  const {privacyUrl} = config.settings;
  return (
    <AppLayout style={styles.container}>
      <WebView source={{uri: privacyUrl}} startInLoadingState renderLoading={() => <LoadingScreen />} />
    </AppLayout>
  );
};
