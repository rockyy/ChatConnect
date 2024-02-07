import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavItem, TabNavigatorParamsList} from '@core/interfaces';
import {Icon} from '@core/components';

interface Props {
  navItems: NavItem[];
}
const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

export const Navigation = (props: Props): JSX.Element => {
  const {navItems} = props;
  const {Navigator, Screen} = Tab;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={navItems[0].name}
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <Icon icon={route.name} size={42} color={color} />
          ),
          tabBarActiveTintColor: 'rgba(155,249,88,1)',
          tabBarInactiveTintColor: 'gray',
          headerShown: route.name === 'connect',
        })}>
        {navItems.map(navItem => (
          <Screen
            key={navItem.name}
            name={navItem.name}
            component={navItem.component}
            options={{
              title: navItem.title,
              headerTitle: '',
            }}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
