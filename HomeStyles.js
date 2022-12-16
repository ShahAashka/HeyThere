import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f3c847',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  chatAndMapButton: {
    backgroundColor: '#5099e9',
    marginHorizontal: 30,
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },
  chatAndMapText: {
    color: '#000000',
    fontSize: 14,
  },
});
