import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Navigation, SettingsNavigator, RootLayout, LoadingScreen} from '@core/components';
import {NavItem} from '@core/interfaces';
import {ConnectScreen} from '@connect/screens';
import {initializeI18n} from '@app/i18n';

const BaseApp = (): JSX.Element => {
  const lang = 'en';
  const {t, i18n} = useTranslation('common');

  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);

  const navItems: NavItem[] = [
    {
      name: 'connect',
      title: t('connect'),
      component: ConnectScreen,
      icon: 'connect',
    },
    {
      name: 'settings',
      title: t('settings'),
      component: SettingsNavigator,
      icon: 'settings',
    },
  ];

  return (
    <RootLayout>
      <Navigation navItems={navItems} />
    </RootLayout>
  );
};

export const App = (): JSX.Element => {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  useEffect(() => {
    (async () => {
      await initializeI18n();
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <LoadingScreen />;
  }

  return <BaseApp />;
};
