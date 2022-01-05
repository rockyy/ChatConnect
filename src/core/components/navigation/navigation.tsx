import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavItem} from '@core/interfaces';
import {Icon} from '@core/components';

interface Props {
  navItems: NavItem[];
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props): JSX.Element => {
  const {navItems} = props;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navItems[0].name}
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => <Icon icon={route.name} size={42} color={color} />,
          tabBarActiveTintColor: 'rgba(95,255,51,1)',
          tabBarInactiveTintColor: 'gray',
        })}>
        {navItems.map((navItem) => (
          <Tab.Screen
            key={navItem.name}
            name={navItem.name}
            component={navItem.component}
            options={{
              title: navItem.title,
              headerTitle: '',
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
