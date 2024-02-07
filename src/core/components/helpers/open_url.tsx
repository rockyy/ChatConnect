import {Linking} from 'react-native';

export function OpenURL(uri: string): Promise<boolean> {
  return Linking.canOpenURL(uri).then(supported => {
    if (supported) {
      Linking.openURL(uri);
      return true;
    }
    return false;
  });
}
