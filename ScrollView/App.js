import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box2}></View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    height: 250,
    width: 250,
    backgroundColor: 'red',
  },
  box2: {
    height: 250,
    width: 250,
    backgroundColor: 'blue',
  },
  box3: {
    height: 250,
    width: 250,
    backgroundColor: 'green',
  },
  box4: {
    height: 250,
    width: 250,
    backgroundColor: 'yellow',
  }
});
