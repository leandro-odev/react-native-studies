import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar, Text, FlatList } from 'react-native';

export default function App() {

  const [feed, setFedd] = useState([
    {id: '0', name: 'Dimitri Payet', age: 36, email: 'payet@vasco.com'},
    {id: '1', name: 'Neymar Jr', age: 29, email: 'neymar@brasil.com'},
    {id: '2', name: 'Lionel Messi', age: 33, email: 'messi@vasco.com'},
    {id: '3', name: 'Cristiano Ronaldo', age: 36, email: 'cr7@vasco.com'},
    {id: '4', name: 'Kylian Mbappé', age: 22, email: 'tartaruga@ninja.com'},
    {id: '5', name: 'Luis Suárez', age: 34, email: 'mordida@gurisdogremio.com'},
    {id: '6', name: 'Zlatan Ibrahimovic', age: 99999, email: 'email@zlatan.com'}
  ])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        // keyExtractor={item => item.id}
        renderItem={(({item}) => <Pessoa data={item} />)}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  areaPessoa: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',

  }
});

function Pessoa(props) {
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.text}>Nome: {props.data.name}</Text>
      <Text style={styles.text}>Idade: {props.data.age}</Text>
      <Text style={styles.text}>Email: {props.data.email}</Text>
    </View>
  )
}
