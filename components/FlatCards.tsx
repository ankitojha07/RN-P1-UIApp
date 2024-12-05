import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.headingText}>Flat Cards 2</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={[styles.cards, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.cards, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.cards, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.cards, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text>Green</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#ffffff',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});

export default FlatCards;
