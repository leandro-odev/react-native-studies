import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, StatusBar } from 'react-native';

import X, {Comp1, Comp2} from './src/components/Multi'
import Primeiro from './src/components/Primeiro';



export default function App() {
  return (
    <SafeAreaView style={styles.App}>
      <StatusBar backgroundColor='#98C9A3' style='light-content' />
      <X/>
      <Comp1/>
      <Comp2/>
      <Primeiro/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#98C9A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: StatusBar.currentHeight,
  },
  test: {
    color: '#000',
    fontSize: 30,
  }
});
