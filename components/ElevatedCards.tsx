import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={style.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          <View>Card 1</View>
          <View>Card 1</View>
          <View>Card 1</View>
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
    justifyContent: 'space-between',
  },
});

export default ElevatedCards;
