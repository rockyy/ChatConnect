import React, {useCallback} from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {Text, FlatList, TouchableOpacity, View} from 'react-native';
import {config} from '@core/config';
import {useTranslation} from 'react-i18next';
import {TabNavigatorParamsList} from '@core/interfaces';
import {AppLayout} from '@core/components';
import {styles} from './language.style';

interface LanguageProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Language'>;
}
type LanguageItemProps = {
  languageId: string;
  name: string;
  onPress: (arg0: string) => void;
};

export const Language: React.FC<LanguageProps> = ({}) => {
  const {i18n} = useTranslation('settings');
  const {languages} = config;

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const LanguageItem = useCallback(
    ({languageId, name, onPress}: LanguageItemProps): JSX.Element => (
      <View style={styles.languageItem}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => onPress(languageId)}>
          <Text style={styles.languageText}>{name}</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  // const renderItem = useCallback(
  //   ({item}) => (
  //     <LanguageItem
  //       name={item.name}
  //       languageId={item.id}
  //       onPress={changeLanguage}
  //     />
  //   ),
  //   [],
  // );

  return (
    <AppLayout style={styles.container}>
      <FlatList
        style={styles.languageList}
        data={languages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <LanguageItem
            name={item.name}
            languageId={item.id}
            onPress={changeLanguage}
          />
        )}
      />
    </AppLayout>
  );
};
