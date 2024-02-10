import React from 'react';
import {FlatList, Alert, Share} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {AppLayout, OpenURL} from '@core/components';
import {TabNavigatorParamsList} from '@core/interfaces';
import {config} from '@core/config';
import {styles} from './settings_screen.style';
import {Settings, SettingsType} from './settings';
import {SettingsItem} from './SettingsItem';
export interface SettingsProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Settings'>;
}

export const SettingsScreen: React.FC<SettingsProps> = ({navigation}) => {
  const {t} = useTranslation(['settings']);

  const onShare = async (): Promise<void> => {
    try {
      const {shareMessage} = config.settings;
      await Share.share({
        message: shareMessage,
      });
    } catch (error: unknown) {
      let errorMessage = '';
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert(errorMessage);
    }
  };

  const itemClickHandler = (setting: SettingsType): void => {
    switch (setting) {
      case 'PRIVACY':
        navigation.navigate('Privacy');
        break;
      case 'LANGUAGE':
        navigation.navigate('Language');
        break;
      case 'FEEDBACK':
        {
          const {supportEmail} = config.settings;
          const emailUri = `mailto:${supportEmail}?subject=Suggestion and Feedback`;
          OpenURL(emailUri).then((status: boolean) => {
            if (!status) {
              Alert.alert(t('email client not installed'));
            }
          });
        }
        break;
      case 'SHARE':
        onShare();
        break;
      case 'RATE':
        {
          const {playStoreUrl} = config.settings;
          OpenURL(playStoreUrl).then((status: boolean) => {
            if (!status) {
              Alert.alert(t('play store not installed'));
            }
          });
        }
        break;
      case 'VERSION':
        break;
      default:
        break;
    }
  };

  return (
    <AppLayout style={styles.container}>
      <FlatList
        style={styles.settingList}
        data={Settings}
        keyExtractor={(item, index) => item.title + item.type + index}
        renderItem={({item}) => (
          <SettingsItem
            title={item.title}
            icon={item.icon}
            type={item.type}
            onPress={() => itemClickHandler(item.type)}
          />
        )}
      />
    </AppLayout>
  );
};
