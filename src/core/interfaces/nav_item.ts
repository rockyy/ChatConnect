import React from 'react';

export interface NavItem {
  name: string;
  title: string;
  icon: string;
  component: React.ComponentClass<any, any> | React.FC;
}

export type TabNavigatorParamsList = {
  Connect: undefined;
  Settings: undefined;
  Privacy: undefined;
  Language: undefined;
};
