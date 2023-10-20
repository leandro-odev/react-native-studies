  import React, {useState} from 'react';
  import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, StatusBar } from 'react-native';

  export default function App() {
    const [numero, setNumero] = useState(0);

    const[nome,setNome] = useState('');
    function pegaNome(){
      alert("Olá " + nome);
    }

    function soma() {
      setNumero(numero + 1);
    }

    function subtrair() {
      setNumero(numero - 1);
    }
    

    return (
      <SafeAreaView style={styles.Container}>
        <StatusBar />

        <TextInput
          style={styles.input}
          placeholder='Digite um número'
          onChangeText={(texto) => setNumero(Number(texto))}
        />

        <View style={styles.view1998}>
          <Button
            title='Soma'
            onPress={soma}
            style={styles.botao}
          />
          <Text style={styles.textoNumero}>{numero}</Text>
          <Button
            title='Subtrair'
            onPress={subtrair}
            style={styles.botao}
          />
        </View>

      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '80%',
      borderWidth: 0.8,
      margin: 2,
      padding: 10,
      fontSize: 15
    },
    botao: {
      backgroundColor: '#121212',
    },
    view1998: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '50%',
    },
    textoNumero: {
      textAlign: 'center',
    },
  });

  1
        {/* <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => setNome(texto)}
        />

        <Button 
          title='Executar'
          onPress={pegaNome}
          style={styles.botao}
        /> */}

