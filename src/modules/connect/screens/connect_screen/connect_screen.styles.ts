import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  noDataLayout: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  phoneInput: {
    marginTop: 50,
    marginLeft: 20,
    width: screenWidth - 40,
  },
  textArea: {},
});
