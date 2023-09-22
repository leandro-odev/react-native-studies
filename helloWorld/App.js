import React from 'react';
import { View, SafeAreaView, Text, StatusBar, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar />
      <Text style={styles.Vasco}>Vamos todos cantar de coração, a Cruz de Malta é o meu pendão, tu tens o nome do heroico português Vasco da Gama, a tua fama assim se fez. Tua imensa torcida é bem feliz, Norte-Sul, Norte-Sul deste Brasil. Tua estrela, na terra a brilhar Ilumina o mar. No atletismo, és um braço, o remo, és imortal, no futebol, és um traço de união Brasil-Portugal. No atletismo, és um braço, no remo, és imortal, no futebol, és um traço De união Brasil-Portugal Vamos todos cantar de coração A Cruz de Malta é o meu pendão! Tu tens o nome do heroico português Vasco da Gama, a tua fama assim se fez Tua imensa torcida é bem feliz Norte-Sul, Norte-Sul deste Brasil Tua estrela, na terra a brilhar Ilumina o mar No atletismo, és um braço No remo, és imortal No futebol, és um traço De união Brasil-Portugal No atletismo, és um braço No remo, és imortal No futebol, és um traço De união Brasil-Portugal</Text>
      <Image style={styles.Image} source={require('./assets/vasco.png')}></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  Image: {
    height: 200,
    width: 200,
  },
  Vasco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    marginHorizontal: 10,
  }
});
