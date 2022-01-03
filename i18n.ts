import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {config} from './src/core/config';
import commonEn from './src/assets/jsons/locales/en/common.json';
import connectEn from './src/assets/jsons/locales/en/connect.json';
import settingsEn from './src/assets/jsons/locales/en/settings.json';
import commonSv from './src/assets/jsons/locales/sv/common.json';
import connectSv from './src/assets/jsons/locales/sv/connect.json';
import settingsSV from './src/assets/jsons/locales/sv/settings.json';

export const initializeI18n = async (): Promise<void> => {
  await i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: config.defaultLang,
    fallbackLng: config.defaultLang,
    debug: __DEV__,
    resources: {
      en: {
        common: commonEn,
        connect: connectEn,
        settings: settingsEn,
      },
      sv: {
        common: commonSv,
        connect: connectSv,
        settings: settingsSV,
      },
    },
  });
};
