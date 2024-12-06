import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {images} from '../utilities/image';

const ImageCard = () => {
  return (
    <View style={style.basic}>
      <Text style={style.headingText}>Image View</Text>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          {images.map((img, index) => (
            <View style={style.imgCard}>
              <Image key={index} source={img} style={style.img} />
              <Text>Image Text</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  basic: {
    padding: 8,
  },
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  img: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 8,
  },
  imgCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    gap: 2,
  },
});

export default ImageCard;
