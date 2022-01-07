import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingList: {
    paddingTop: 20,
  },
  settingsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 2,
    height: 62,
  },
  settingsItem: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 14,
    fontWeight: '500',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginLeft: 12,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 0.6,
  },
  action: {flex: 1, flexDirection: 'row'},
});
