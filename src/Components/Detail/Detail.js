import React from 'react';
import {View, Text, Image} from 'react-native';
import {detailStyles} from './DetailStyles';

export default DetailScreen = props => {
  const data = props.route.params.item;
  return (
    <View style={detailStyles.mainContainer}>
      <Image
        source={{
          uri: data['im:image'][2].label,
        }}
        style={detailStyles.image}
      />
      <View style={detailStyles.titleContainer}>
        <Text style={detailStyles.titleText}>{data['title'].label}</Text>
        <Text>{data['rights'].label}</Text>
      </View>
      <View style={detailStyles.contentContainer}>
        <Text style={detailStyles.contentText}>Price : {data['im:price'].label}</Text>
        <Text style={detailStyles.contentText}>Release Date: {data['im:releaseDate'].attributes.label}</Text>
        <Text style={detailStyles.contentText}>Artist: {data['im:artist'].label}</Text>
      </View>
    </View>
  );
};
