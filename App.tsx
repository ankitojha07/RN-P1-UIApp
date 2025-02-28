import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import ImageCard from './components/ImageCard';
import ActionCard from './components/ActionCard';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.lightText, styles.logo]}>App Name</Text>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <ImageCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  logo: {
    textAlign: 'center',
    padding: 8,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  darkText: {
    color: '#000000',
  },
  lightText: {
    color: '#000000',
  },
});

export default App;
