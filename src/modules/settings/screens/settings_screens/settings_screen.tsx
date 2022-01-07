/* eslint-disable no-console */
import React, {useCallback} from 'react';
import {Text, FlatList, TouchableOpacity, View, Alert, Share} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {AppLayout, OpenURL, Icon} from '@core/components';
import {TabNavigatorParamsList} from '@core/interfaces';
import {config} from '@core/config';
import {styles} from './settings_screen.style';
import {Settings} from './settings';

export interface SettingsProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Settings'>;
}

export const SettingsScreen: React.FC<SettingsProps> = ({navigation}) => {
  const {t} = useTranslation(['connect', 'common']);
  const SettingsItem = useCallback(
    ({title, icon, onPress}): JSX.Element => (
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.action} onPress={() => onPress(title)}>
          {icon && (
            <View style={styles.imageContainer}>
              <Icon icon={icon} size={42} />
            </View>
          )}
          <View style={styles.content}>
            <View>
              <Text style={styles.settingsText}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ),
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

  const itemClickHandler = (title: string): void => {
    console.log(`itemClickHandler :${title}`);
    switch (title) {
      case 'Privacy Policy':
        navigation.navigate('Privacy');
        break;
      case 'Suggestion and Feedback':
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
      case 'Tell a Friend':
        onShare();
        break;
      case 'Rate in Play Store':
        {
          const {playStoreUrl} = config.settings;
          OpenURL(playStoreUrl).then((status: boolean) => {
            if (!status) {
              Alert.alert(t('Play store not installed'));
            }
          });
        }
        break;
      case 'Version':
        break;
      default:
        break;
    }
  };
  const renderItem = useCallback(
    ({item}) => <SettingsItem title={item.title} icon={item.icon} onPress={itemClickHandler} />,
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
