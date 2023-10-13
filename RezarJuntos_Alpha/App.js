import { StyleSheet, Text, SafeAreaView, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.barra}>
      <StatusBar backgroundColor='#98C9A3' style='light-content' />
      <View>
        <Text style={styles.test}>Vasco</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  barra: {
    flex: 1,
    backgroundColor: '#98C9A3',
  },
  content: {
    marginTop: StatusBar.currentHeight,
  },
  test: {
    color: '#000',
    fontSize: 30,
  }
});
