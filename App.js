import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

const githubLogo = require('./src/Assets/img/githublogo.png');

const App = () => {
  const [arrayRepo, setArrayRepo] = useState([]);

  useEffect(() => {
    getReposByUsername();
  }, []);

  const getReposByUsername = async () => {
    try {
      const response = await Axios.get(
        'https://api.github.com/users/yaelahky/repos?page=1',
      );
      if (response) {
        setArrayRepo(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.textTitle}>{item.name}</Text>
      <Text>{item?.description ?? 'No desc'}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.header}>
        <Image source={githubLogo} style={styles.imageHeader} />
      </View>
      <FlatList
        style={{height: '100%'}}
        data={arrayRepo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    marginTop: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
