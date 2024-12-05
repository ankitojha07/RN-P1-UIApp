import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import image1 from '../images/image.jpg';
import image2 from '../images/image-1.jpg';
import image3 from '../images/image-2.jpg';
import image4 from '../images/image-3.jpg';
import image5 from '../images/image-4.jpg';
import image6 from '../images/image-5.jpg';
import image7 from '../images/image-6.jpg';
import image8 from '../images/image-7.jpg';
import image9 from '../images/image-8.jpg';
import image10 from '../images/image-9.jpg';

const ImageCard = () => {
  return (
    <View style={{padding: 8}}>
      <Text style={style.headingText}>Image View</Text>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          <View style={style.imgCard}>
            <Image source={image1} style={style.img} />
            <Text>Mahal</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image2} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image3} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image4} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image5} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image6} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image7} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image8} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image9} style={style.img} />
            <Text>Image Text</Text>
          </View>
          <View style={style.imgCard}>
            <Image source={image10} style={style.img} />
            <Text>Image Text</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
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
  },
});

export default ImageCard;
