import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import commonEn from '@assets/jsons/locales/en/common.json';
import connectEn from '@assets/jsons/locales/en/connect.json';
import settingsEn from '@assets/jsons/locales/en/settings.json';
import commonSv from '@assets/jsons/locales/sv/common.json';
import connectSv from '@assets/jsons/locales/sv/connect.json';
import settingsSV from '@assets/jsons/locales/sv/settings.json';
import {config} from '@core/config';

export const initializeI18n = async (): Promise<void> => {
  await i18n.use(initReactI18next).init({
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
