import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import { ItemView } from '../ItemView';

export default HomeScreen = () => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const url =
      'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res.feed.entry);
      })
      .catch(error => {
        console.log('get data error:' + error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => ItemView(item, index)}
      />
    </View>
  );
};