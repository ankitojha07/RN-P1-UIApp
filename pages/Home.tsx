import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text style={styles.headingText}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
});
