import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {SettingsScreen, Privacy, Language} from '@settings/screens';

const SettingsStack = createStackNavigator();

export const SettingsNavigator: React.FC = () => {
  const {t} = useTranslation(['settings']);
  const {Navigator, Screen} = SettingsStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerTitle: 'Chat Connect'}}
      />
      <Screen
        name="Privacy"
        component={Privacy}
        options={{headerTitle: t('privacy policy')}}
      />
      <Screen
        name="Language"
        component={Language}
        options={{headerTitle: t('language')}}
      />
    </Navigator>
  );
};
