import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingsScreen, Privacy} from '@settings/screens';

const SettingsStack = createStackNavigator();

const SettingsNavigator: React.FC = () => {
  const {Navigator, Screen} = SettingsStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Screen name='Settings' component={SettingsScreen} />
      <Screen name='Privacy' component={Privacy} />
    </Navigator>
  );
};

export default SettingsNavigator;
