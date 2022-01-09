import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  languageList: {
    paddingTop: 20,
  },
  languageItem: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 0.6,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 12,
    height: 62,
    textAlignVertical: 'center',
  },
  action: {
    flex: 1,
    flexDirection: 'row',
  },
});
