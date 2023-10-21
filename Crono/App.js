import React, {useState} from 'react';
import { View, SafeAreaView, StatusBar, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0;

export default function App() {

  const[numero, setNumero] = useState(0);
  const[botao, setBotao] = useState('INICIAR' );
  const[ultimo, setUltimo] = useState(null);

  function iniciar() {
    if (timer != null) {
      clearInterval(timer);
      timer = null;
      setBotao('INICIAR');
    }
    else {
      timer = setInterval( () => {
          segundos++;
          if (segundos == 60) {
            segundos = 0;
            minutos++;
          }
          if(minutos == 60) {
            minutos = 0;
            horas++;
          }

          let formato = (horas<10? "0" + horas : horas) + ':' + (minutos<10? "0" + minutos : minutos) + ':' + (segundos<10? "0" + segundos : segundos);
          setNumero(formato); 
        }, 1000 );
        setBotao('PARAR');
      }
  }

  function zerar() {
    if (timer != null || botao == 'INICIAR') {
      clearInterval(timer);
      setUltimo(numero);
      timer = null;
      minutos = 0;
      segundos = 0;
      horas = 0;
      setNumero(0);
      setBotao('INICIAR');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content"/>
    <Image
    source={require('./assets/crono.png')}
    />
    <Text style={styles.texto}> {numero} </Text>

    <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={iniciar} >
          <Text style={styles.btnText}>
            {botao}
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnText}>
            ZERAR
          </Text>
      </TouchableOpacity>
    </View>
    
    <Text style={styles.ultimo}>
        {ultimo == null? '':`Último tempo: ${ultimo}`}
    </Text>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#fff',
    fontSize:38,
    fontWeight: 'bold',
    marginTop: -162
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 155,
    height: 40,
    width: '100%',
    justifyContent: 'space-around'
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '40%',
    borderRadius: 9
  },
  btnText:{
    fontSize:20,
    fontWeight:'bold'
  },
  ultimo:{
    fontSize: 25,
    fontWeight: 'bold', 
    color: '#fff',
    marginTop: 30
  }

});

