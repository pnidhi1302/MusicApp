import {StyleSheet} from 'react-native';

export const itemViewStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#f4511e',
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
