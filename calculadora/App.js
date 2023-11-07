import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  
  const [op, setOp] = React.useState('+');
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [resultado, setResultado] = React.useState(0);

  const mudarOperacao = (op) => {
    setOp(op);
  }

  const calcular = () => {
    // if (num1 == '2' && num2 == '2' && op == '+') setResultado(22);
    if(op == '+') setResultado(Number(num1) + Number(num2));
    else if(op == '-') setResultado(Number(num1) - Number(num2));
    else if(op == '*') setResultado(Number(num1) * Number(num2));
    else if(op == '/') setResultado(Number(num1) / Number(num2));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <ImageBackground source={require('./assets/vasco.jpg')} style={styles.backgroundImage}>
        <View style={styles.caixa}>

        {/* Entrada usuario */}
        <View style={styles.inputUsuario}>

        <TextInput style={styles.inputUsuarioText}
        placeholder='Número'
        keyboardType='numeric'
        onChangeText={(val) => setNum1(val)}
        />

        <Text style={styles.inputUsuarioOperacao}>{op || '-'}</Text>


        <TextInput style={styles.inputUsuarioText}
        placeholder='Número'
        keyboardType='numeric'
        onChangeText={(val) => setNum2(val)}
        />

        <TouchableOpacity onPress={calcular}>
          <Text style={styles.igual}>=</Text>
        </TouchableOpacity>

        </View>






        {/* Operações */}
        <View style={styles.operacoes}>

        <TouchableOpacity onPress={() => mudarOperacao('+')}>
          <Text style={styles.operacoesText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => mudarOperacao('-')}>
          <Text style={styles.operacoesText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => mudarOperacao('*')}>
          <Text style={styles.operacoesText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => mudarOperacao('/')}>
          <Text style={styles.operacoesText}>/</Text>
        </TouchableOpacity>

        </View>




        {/* Resultado */}
        <View style={styles.resultado}>
        <Text style={styles.resultadoText}>Resultado:</Text>
        <Text style={styles.resultadoText}>{resultado}</Text>
        </View>

        </View>
      </ImageBackground>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  caixa: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    gap: 20,
    marginTop: 180,
    borderColor: '#000',
    borderWidth: 3,
  },
  inputUsuario: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 40,
    padding: 10,
  },
  inputUsuarioText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputUsuarioOperacao: {
    color: '#000',
    fontSize: 35,
    marginTop: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  igual: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 15,
    width: 60,
  },

  operacoes: {
    flexDirection: 'row',
    gap: 20,
  },
  operacoesText: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 50,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 30,
    width: 40,
    height: 50,
    textAlign: 'center',
  },
  resultado: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginTop: 20,
  },
  resultadoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});