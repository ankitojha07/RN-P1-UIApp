import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={style.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          <View style={[style.elevatedCardf, style.cards]}>
            <Text>Card 1</Text>
          </View>
          <View style={[style.elevatedCardf, style.cards]}>
            <Text>Card 2</Text>
          </View>
          <View style={[style.elevatedCardf, style.cards]}>
            <Text>Card 1</Text>
          </View>
          <View style={[style.elevatedCardf, style.cards]}>
            <Text>Card 1</Text>
          </View>
          <View style={[style.elevatedCardf, style.cards]}>
            <Text>Card 1</Text>
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
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  scrollContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  cards: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCardf: {
    elevation: 4,
    backgroundColor: 'orange',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#fff',
  },
});

export default ElevatedCards;
