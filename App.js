import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';

const githubLogo = require('./src/Assets/img/githublogo.png');

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={githubLogo} style={styles.imageHeader} />
      </View>
      <View style={styles.card}>
        <Text style={styles.textTitle}>Nama Repository</Text>
        <Text>Link Repository</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 15,
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
  },
  imageHeader: {
    height: 38,
    width: 120,
  },
  card: {
    elevation: 10,
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    marginVertical: 16,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
