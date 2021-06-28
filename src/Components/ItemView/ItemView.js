import React from 'react';
import {View, Text, Image} from 'react-native';
import {itemViewStyles} from './ItemViewStyles';

export default renderNativeItem = (item, index) => {
  return (
    <View style={itemViewStyles.container}>
      <Image
        source={{
          uri: item['im:image'][0].label,
        }}
        style={itemViewStyles.image}
      />
      <Text key={index} style={itemViewStyles.title}>
        {item['im:name'].label}
      </Text>
    </View>
  );
};
