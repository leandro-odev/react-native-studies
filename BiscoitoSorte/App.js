import React, { useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [text, setText] = useState('');

  let frases = 
  [
    "Com determinação e trabalho árduo, o Vasco vai manter sua grandeza na primeira divisão!",
    "A força de um Gigante da Colina não se mede pela divisão, mas pela paixão e perseverança de sua torcida!",
    "Cada desafio é uma oportunidade de crescimento. O Vasco se erguerá ainda mais forte na primeira divisão.",
    "A história gloriosa do Vasco é nossa fonte inesgotável de inspiração. Nada nos impedirá de brilhar na elite do futebol.",
    "Vasco, a estrela solitária que brilha mais intensamente nas adversidades. Vamos juntos, rumo à vitória!",
    "A queda é apenas um capítulo na história do Vasco. O renascimento está próximo, e voltaremos com mais determinação do que nunca!",
    "A torcida vascaína é a força que impulsiona o time. Juntos, somos invencíveis na batalha pela permanência na primeira divisão!",
    "Não importa o quão difícil o caminho possa parecer, a resiliência do Vasco o manterá na elite do futebol brasileiro.",
    "Os verdadeiros campeões não desistem. O Vasco está destinado a conquistar grandes feitos na primeira divisão!",
    "O Vasco é uma paixão que supera todas as adversidades. A segunda divisão jamais será o nosso lar.",
    "O jogo vai ser 58 a 0 se eu entrar e matar todo mundo, mas eu não vou fazer isso, então vai ser 3 a 1.",
  ];  

  function quebrarBiscoito(){
    if(text != '') return;
    setImg(require('./assets/biscoitoAberto.png'));
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    while(text == '"'+frases[numeroAleatorio]+'"')
    {
      numeroAleatorio = Math.floor(Math.random() * frases.length);
    }
    setText('"' + frases[numeroAleatorio] + '"');
  }

  function resetarBiscoito() {
    setImg(require('./assets/biscoito.png'));
    setText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <Image
        source={img}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        {text}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={quebrarBiscoito}>
        <Text style={styles.btnText}>
          Quebrar Biscoito
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={resetarBiscoito}>
        <Text style={styles.btnText}>
          Resetar Biscoito
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 300,
    height: 300,
  },
  texto: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#dd7b22',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '80%',
    height: '7%',
    borderRadius: 25,
    margin: 10,
    borderColor: '#dd7b22',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
