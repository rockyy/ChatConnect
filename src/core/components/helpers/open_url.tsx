import {Linking} from 'react-native';
import {config} from '@core/config';

export function OpenURL(phone: string, message: string): Promise<boolean> {
  const {URL} = config.connect;
  const whatsappUri = `${URL}?phone=${phone}&text=${message}`;
  return Linking.canOpenURL(whatsappUri).then((supported) => {
    if (supported) {
      Linking.openURL(whatsappUri);
      return true;
    }
    return false;
  });
}
