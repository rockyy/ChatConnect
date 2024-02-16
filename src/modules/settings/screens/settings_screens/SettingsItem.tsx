import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './settings_screen.style';
import {SettingsType} from './settings';
import {Icon} from '@core/components';

type SettingsProps = {
  title: string;
  icon: string | undefined;
  type: SettingsType;
  onPress: () => void;
};

export const SettingsItem = ({
  title,
  icon,
  type,
  onPress,
}: SettingsProps): JSX.Element => {
  const {t} = useTranslation(['settings']);
  const appVersion = '1.3';
  const settingsText =
    type === 'VERSION' ? `${t(title)}  ${appVersion}` : t(title);

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
  );
};
