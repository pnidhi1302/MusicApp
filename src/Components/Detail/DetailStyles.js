import {StyleSheet} from 'react-native';

export const detailStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
  },
  image: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#f4511e',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f4511e',
  },
  contentContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 10
  },
  contentText: {
    fontSize: 20,
  }
});
