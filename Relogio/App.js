import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

export default function App() {
  const [horaAtual, sethoraAtual] = useState('');
  const [op, setOp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let diferencaTempo = 0;
      let cidade = '';
      
      if(op == 0) {
        diferencaTempo = -3;
        cidade = 'Maceió';
      }
      else if(op == 1) {
        diferencaTempo = -4;
        cidade = 'Nova York';
      }
      else {
        diferencaTempo = 0;
        cidade = 'Londres';
      }

      const utcAtual = new Date();
      const gmtHora = new Date(utcAtual.getTime() + (diferencaTempo * 60 * 60 * 1000));
      let hora = gmtHora.getUTCHours();
      let minute = gmtHora.getUTCMinutes();
      let segundo = gmtHora.getUTCSeconds();

      if (minute >= 60) hora += 1;
      if (hora >= 24) hora -= 24;
      if (hora < 10) hora = '0' + hora;
      if (minute < 10) minute = '0' + minute;
      if (segundo < 10) segundo = '0' + segundo;
      
      const horaString = hora + ':' + minute + ':' + segundo;
      sethoraAtual(cidade + ' / ' + horaString);
    }, 1000);
    return () => clearInterval(interval);
  }, [op])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      
      {/* Hora */}
      <View>
        <Text style={styles.horaText}>
          {horaAtual}
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={() => setOp(0)}>
        <Text style={styles.btnText}>
          Maceió
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setOp(1)}>
          <Text style={styles.btnText}>
            Nova York
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setOp(2)}>
          <Text style={styles.btnText}>
            Londres
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horaText: {
    color:'#fff',
    fontSize:38,
    fontWeight: 'bold',
    marginTop: -80,
  },
  btnArea:{
    flexDirection: 'column',
    marginTop: 10,
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '40%',
    borderRadius: 9,
    marginTop: 10,
  },
  btnText:{
    textDecorationColor: '#fff',
    fontSize:20,
    fontWeight:'bold',
  },
});
