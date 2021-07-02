import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {itemViewStyles} from './ItemViewStyles';

export default renderNativeItem = (item, index, props) => {
  return (
    <TouchableOpacity
      style={itemViewStyles.container}
      onPress={() =>
        props.navigation.navigate('Details', {
          item,
        })
      }>
      <Image
        source={{
          uri: item['im:image'][0].label,
        }}
        style={itemViewStyles.image}
      />
      <Text key={index} style={itemViewStyles.title}>
        {item['im:name'].label}
      </Text>
    </TouchableOpacity>
  );
};
