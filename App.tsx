// import React from 'react';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

// import {useSelector} from 'react-redux';
import {Navigation, RootLayout, LoadingScreen} from './src/core/components';
// import * as customTheme from '@assets/jsons/custom_theme.json';
import {NavItem} from './src/core/interfaces';
import {ConnectScreen} from './src/modules/connect/screens';
import {SettingsScreen} from './src/modules/settings/screens';
// import {store, persistor, RootState} from '@app/store';
import {initializeI18n} from './i18n';

const BaseApp = (): JSX.Element => {
  // const mode = useSelector((state: RootState) => state.settings.mode);
  // const lang = useSelector((state: RootState) => state.settings.lang);
  // const theme = mode === 'light' ? light : dark;
  const lang = 'sv';
  const {t, i18n} = useTranslation('common');

  // eslint-disable-next-line no-console
  console.log(`BaseApp useTranslation common : ${JSON.stringify(t)}`);
  // eslint-disable-next-line no-console
  console.log(`i18n.language : ${i18n.language}`);
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
      icon: 'thought-bubble-outline',
      iconFocused: 'thought-bubble',
    },
    {
      name: 'settings',
      title: t('settings'),
      component: SettingsScreen,
      icon: 'settings-outline',
      iconFocused: 'settings',
    },
  ];
  // eslint-disable-next-line no-console
  console.log(`navItems ;${navItems}`);
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
