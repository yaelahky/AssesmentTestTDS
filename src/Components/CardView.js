import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CardView = ({data}) => (
  <View style={styles.card}>
    <Text style={styles.textTitle}>{data.name}</Text>
    {data?.description ? (
      <Text>{data.description}</Text>
    ) : (
      <Text style={styles.noDescription}>No Description</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
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
  noDescription: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default CardView;
