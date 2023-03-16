import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Sidebar from './NavBar';


const PestPageWhiteFlies = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Sidebar></Sidebar>
      <Image
        style={styles.bannerImage}
        source={require('./WhiteFlies.jpeg')}
      />
      <Text style={styles.heading}>White Flies, Tamil Nadu </Text>
      <Text style={styles.text}>
      Whiteflies are tiny, sap-sucking insects that belong to the same group of insects as aphids and scales. They can be very destructive pests, particularly in the tropics and subtropics. When present in large numbers, whitefly feeding can affect plant growth causing distortion, discoloration, yellowing or silvering of leaves. Whiteflies not only cause damage by feeding but also may transmit plant viruses. They injure plants directly through their feeding by removing plant sap and excrete sticky honeydew which causes yellowing or death of leaves. The most common species are the greenhouse whitefly and the tobacco whitefly
      </Text> 
      <Text style={styles.heading}> Organic Pesticides To Help Infestation</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Horticultural oils </Text>
        <Text style={styles.listItemText}>
        Horticultural oils are a type of reduced-risk pesticide that can be used to control insect pests on plants. They work by smothering eggs, larvae, and adult insects. Horticultural oils can be applied in winter or early spring and are effective in controlling scale insects. These oils may provide suppression of aphids, mealybugs, thrips, whiteflies, and spider mites. Thorough coverage of all plant parts is important for the effectiveness of horticultural oils. Various types of oils have been used for centuries to control insect and mite pests and remain an important tool to manage certain pests. Petroleum-based horticultural oils usually contain paraffin which is more toxic to insects/mites but safer to use on plants than other petroleum-based products.
        </Text>
        <Text style={styles.listItem}>• Neem Oil</Text>
        <Text style={styles.listItemText}>
     Neem oil is a natural pesticide and insect repellent that is derived from the seeds of the neem tree. It is commonly used in organic farming to control pests and diseases, including termites. Neem oil contains azadirachtin, which disrupts the growth and development of insects, making it an effective alternative to conventional chemical pesticides. Neem oil is non-toxic to humans and animals, but it should still be used with caution and in accordance with its instructions. Neem oil is also used in traditional medicine for its antibacterial and antifungal properties
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("வெள்ளை ஈக்கள்")}>
        <Text style={styles.buttonText}>இதை தமிழில் படியுங்கள்</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    height: 400,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color:'#2196F3',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    font: 'Roboto',
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
    textAlign: 'justify',
    marginVertical: 5,
  },

});

export default PestPageWhiteFlies;