import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {CardView} from './src/Components';

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
        setArrayRepo(response?.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const renderItem = ({item}) => <CardView data={item} />;
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.header}>
        <Image source={githubLogo} style={styles.imageHeader} />
      </View>
      {isLoading ? (
        <View style={{marginTop: 16}}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <FlatList
          style={{height: '100%'}}
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
    fontSize: 16,
  },
});

export default App;
