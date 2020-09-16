import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
} from 'react-native';

import {CardView, SpinLoading, Header} from './src/Components';

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
        'https://api.github.com/users/yaelahky/repos?page=10',
      );
      if (response) {
        setArrayRepo(response?.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const renderEmptyData = () => (
    <Text style={styles.textEmptyData}>Data kosong</Text>
  );

  const renderItem = ({item}) => <CardView data={item} />;
  return (
    <SafeAreaView style={styles.height100}>
      <Header />
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
          ListEmptyComponent={renderEmptyData}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  height100: {
    height: '100%',
  },
  textEmptyData: {
    textAlign: 'center',
    width: '100%',
    marginTop: 16,
  },
});

export default App;
