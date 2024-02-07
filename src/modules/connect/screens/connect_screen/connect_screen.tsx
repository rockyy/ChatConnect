import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import PhoneInput from 'react-native-phone-number-input';
import DeviceCountry from 'react-native-device-country';
import {AppLayout, Button, TextArea, OpenURL} from '@core/components';
import {Alert} from 'react-native';
import {config} from '@core/config';
import {styles} from './connect_screen.styles';

export const ConnectScreen = (): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberWithDialCode, setPhoneNumberWithDialCode] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [message, setMessage] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const {t} = useTranslation(['connect', 'common']);
  useEffect(() => {
    (async (): Promise<void> => {
      const {code} = await DeviceCountry.getCountryCode();
      setCountryCode(code.toLocaleUpperCase());
    })();
  }, [countryCode]);

  const onConnectClick = (): void => {
    const notValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!notValid) {
      const text = t('not a valid number');
      Alert.alert(`${text} ${phoneNumberWithDialCode}`);
    } else {
      const {URL} = config.connect;
      const whatsappUri = encodeURI(
        `${URL}?phone=${phoneNumberWithDialCode}&text=${message}`,
      );

      OpenURL(whatsappUri).then((status: boolean) => {
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
        key={countryCode}
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode={countryCode}
        layout="first"
        onChangeText={text => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={text => {
          setPhoneNumberWithDialCode(text);
        }}
        containerStyle={styles.phoneInput}
        withShadow
        autoFocus
      />
      <TextArea
        value={message}
        handleChange={handleMessage}
        placeholder={t('message')}
      />
      <Button handleClick={onConnectClick} text={t('start chat')} />
    </AppLayout>
  );
};
