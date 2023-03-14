import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const PestPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('./assets/pest_images/DampWoodTermite.jpg')}
      />
      <Text style={styles.heading}>Pest Name and Region</Text>
      <Text style={styles.text}>
        This is a sample UI with a banner image, heading, and text.
      </Text>
      <Text style={styles.text}>
      Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a     document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as.</Text>
      <Text style={styles.heading}> Organic Pesticides To Help Infestation</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Item 1</Text>
        <Text style={styles.listItemText}>Some text in between</Text>
        <Text style={styles.listItem}>• Item 2</Text>
        <Text style={styles.listItemText}>More text in between</Text>
        <Text style={styles.listItem}>• Item 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color:'#2196F3',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
    listItem: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color:'#2196F3',
  },
    listItemText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },

});

export default PestPage;
