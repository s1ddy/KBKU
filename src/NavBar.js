import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.link}>More</Text>
        <Text style={styles.link}>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 34,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Helvetica',
    paddingHorizontal: 20,
  },
});

export default Navbar;