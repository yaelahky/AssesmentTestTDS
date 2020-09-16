import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const SpinLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});

export default SpinLoading;
