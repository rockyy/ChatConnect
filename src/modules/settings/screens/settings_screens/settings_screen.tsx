/* eslint-disable no-console */
import React, {useCallback} from 'react';
import {Text, FlatList, TouchableOpacity, View, Alert, Share} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {AppLayout, OpenURL, Icon} from '@core/components';
import {TabNavigatorParamsList} from '@core/interfaces';
import {config} from '@core/config';
import {styles} from './settings_screen.style';
import {AppSettings, Settings, SettingsType} from './settings';

export interface SettingsProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Settings'>;
}

export const SettingsScreen: React.FC<SettingsProps> = ({navigation}) => {
  const {t} = useTranslation(['settings']);

  const SettingsItem = useCallback(({title, icon, type, onPress}): JSX.Element => {
    const appVersion = '1.2';
    const settingsText = type === 'VERSION' ? `${t(title)} ${appVersion}` : t(title);
    return (
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.action} onPress={() => onPress(type)}>
          {icon && (
            <View style={styles.imageContainer}>
              <Icon icon={icon} size={42} />
            </View>
          )}
          <View style={styles.content}>
            <View>
              <Text style={styles.settingsText}>{settingsText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )},
  [],
);

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
              Alert.alert(t('Email client not installed'));
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
              Alert.alert(t('Play store not installed'));
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
  const renderItem = useCallback(
    ({item}: AppSettings) => (
      <SettingsItem title={item.title} icon={item.icon} type={item.type} onPress={itemClickHandler} />
    ),
    [],
  );

  return (
    <AppLayout style={styles.container}>
      <FlatList
        style={styles.settingList}
        data={Settings}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={renderItem}
      />
    </AppLayout>
  );
};
