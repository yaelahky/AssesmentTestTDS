import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';

import {CardView, SpinLoading} from './src/Components';

const githubLogo = require('./src/Assets/img/githublogo.png');

const App = () => {
  const [arrayRepo, setArrayRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getReposByUsername();
  }, []);

  const getReposByUsername = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(
        'https://api.github.com/users/yaelahky/repos?page=1',
      );
      if (response) {
        console.log(response.data);
        setArrayRepo(response?.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const renderItem = ({item}) => <CardView data={item} />;
  return (
    <SafeAreaView style={styles.height100}>
      <View style={styles.header}>
        <Image source={githubLogo} style={styles.imageHeader} />
      </View>
      {isLoading ? (
        <SpinLoading />
      ) : (
        <FlatList
          style={styles.height100}
          data={arrayRepo}
          extraData={arrayRepo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getReposByUsername}
            />
          }
        />
      )}
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
  height100: {
    height: '100%',
  },
});

export default App;
