import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingsScreen, Privacy} from './../../../modules/settings/screens';

const SettingsStack = createStackNavigator();

export const SettingsNavigator: React.FC = () => {
  const {Navigator, Screen} = SettingsStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Screen name="Settings" component={SettingsScreen} options={{title: ''}} />
      <Screen name="Privacy" component={Privacy} />
    </Navigator>
  );
};
