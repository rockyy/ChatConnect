export type SettingsType =
  | 'PRIVACY'
  | 'LANGUAGE'
  | 'FEEDBACK'
  | 'SHARE'
  | 'RATE'
  | 'VERSION';

export type AppSetting = {
  title: string;
  icon: string | undefined;
  type: SettingsType;
};

export const Settings: AppSetting[] = [
  {title: 'privacy policy', icon: 'privacy', type: 'PRIVACY'},
  {title: 'language', icon: 'translate', type: 'LANGUAGE'},
  {title: 'suggestion and feedback', icon: 'feedback', type: 'FEEDBACK'},
  {title: 'tell a friend', icon: 'share', type: 'SHARE'},
  {title: 'rate in play store', icon: 'rating', type: 'RATE'},
  {title: 'version', icon: undefined, type: 'VERSION'},
];
