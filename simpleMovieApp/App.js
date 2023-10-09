import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {
  let caminho = './assets/interestelar.jpg'
  const [defaultRating, setdefaultRating] = useState(0)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () => {
    return (
        <View style={styles.CustomRatingBar}>
          {
            maxRating.map((item, key) => {
              return (
                /*
                se quiser que a nota seja padrão, remova o onPress no TouchableOpacity, e mude o useState de 0 para 5 na linha 6
                onPress={() => setdefaultRating(item)}
                */
                <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setdefaultRating(item)}>
                  <Image style={styles.starImgStyle} source={ 
                    item <= defaultRating ? {uri: starImgFilled} : {uri: starImgCorner}
                  }
                  />
                </TouchableOpacity>
              )
            }
            )
          }
        </View>
    )
  }
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        {/* Filme */}
        <Text style={styles.titulo}> Interestelar </Text>
        <Image style={styles.Imagem} source={require(caminho)}/>
        <Text style={styles.resumo}>"Interestelar" é um filme de ficção científica dirigido 
          por Christopher Nolan, onde um ex-piloto da NASA lidera uma 
          missão para encontrar um novo lar para a humanidade, explorando 
          temas como a relatividade e a sobrevivência da espécie humana.</Text>

        {/* Critica */}
        <View>
          <CustomRatingBar/>
          <Text style={styles.critica}>
            "Interestelar" é um filme com visual espetacular, atuações perfeitas 
            e uma história envolvente e emocionante que pode fazer o espectador 
            chorar. Além disso, possui plot twists surpreendentes que elevam ainda 
            mais o nível da narrativa.
            </Text>
        </View>
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
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  Imagem:{
    width: '100%',
    height: 300,
    resizeMode: 'contain'
  },
  resumo: {
    fontSize: 15,
  },
  CustomRatingBar: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  critica: {
    fontSize: 15,
  }
});
