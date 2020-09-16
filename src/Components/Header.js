import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const githubLogo = require('../Assets/img/githublogo.png');

const Header = () => (
  <View style={styles.header}>
    <Image source={githubLogo} style={styles.imageHeader} />
  </View>
);

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
});

export default Header;
