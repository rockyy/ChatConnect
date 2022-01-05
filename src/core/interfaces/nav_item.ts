/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface NavItem {
  name: string;
  title: string;
  icon: string;
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}
