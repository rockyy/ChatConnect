import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavItem} from '@core/interfaces';

interface Props {
  navItems: NavItem[];
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props): JSX.Element => {
  const {navItems} = props;
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={navItems[0].name}>
        {navItems.map((navItem) => (
          <Tab.Screen
            key={navItem.name}
            name={navItem.title}
            component={navItem.component}
            options={{
              title: navItem.title,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
