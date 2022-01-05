import React, {useState, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import PhoneInput from 'react-native-phone-number-input';
import {AppLayout, Button, TextArea, OpenURL} from '@core/components';
import {Alert} from 'react-native';
import {styles} from './connect_screen.styles';

export const ConnectScreen = (): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const {t} = useTranslation(['connect', 'common']);

  const onConnectClick = (): void => {
    const notValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!notValid) {
      const text = t('not a valid number');
      Alert.alert(`${text} ${formattedPhoneNumber}`);
    } else {
      OpenURL(formattedPhoneNumber, message).then((status: boolean) => {
        if (!status) {
          Alert.alert(t('whatsapp not installed'));
        }
      });
    }
  };
  const handleMessage = (text: string): void => {
    setMessage(text);
  };

  return (
    <AppLayout style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode='IN'
        layout='first'
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedPhoneNumber(text);
        }}
        containerStyle={styles.phoneInput}
        withShadow
        autoFocus
      />
      <TextArea value={message} handleChange={handleMessage} placeholder={t('message')} />
      <Button handleClick={onConnectClick} text={t('start chat')} />
    </AppLayout>
  );
};
