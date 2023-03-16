import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Sidebar from './NavBar';


const PestPageAphid = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Sidebar></Sidebar>
      <Image
        style={styles.bannerImage}
        source={require('./aphid.jpg')}
      />
      <Text style={styles.heading}>Aphids, Gujurat </Text>
      <Text style={styles.text}>
      Aphids are a common pest that can have a significant impact on cotton crops in Gujarat, India. These small, sap-sucking insects feed on the leaves and stems of the cotton plants, causing damage and stunting growth. This can result in reduced yields and lower quality cotton. In addition, aphids can also transmit viruses that can further damage the plants. Farmers in Gujarat may use various methods to control aphids, including cultural practices, natural predators, and organic pesticides, in order to protect their cotton crops and ensure a successful harvest.
      </Text> 
      <Text style={styles.heading}> Organic Pesticides To Help Infestation</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Insecticidal soap </Text>
        <Text style={styles.listItemText}>
        Insecticidal soap is a type of pesticide that can be used to control a wide variety of insect pests on plants. It is made from a solution of potassium salts of fatty acids, which work by dissolving the protective coating on the insect's body. This causes the insect to dehydrate and die. Insecticidal soap is generally considered to be a safe and effective method of controlling pests, as it is non-toxic to humans and most beneficial insects. However, it is important to read and follow the instructions on the label carefully, as overuse or misuse of the product can lead to damage to plants or unintended harm to beneficial insects.
        </Text>
        <Text style={styles.listItem}>• Orange Oil</Text>
        <Text style={styles.listItemText}>
        Orange oil is a natural insecticide that is effective in controlling aphids, small sap-sucking insects that can damage plants. The oil is extracted from the peels of oranges and contains a compound called d-limonene, which has insecticidal properties. When sprayed on plants, the oil suffocates aphids by clogging their respiratory system, causing them to die. Orange oil is safe for humans and pets, and it does not harm beneficial insects like ladybugs or bees. Regular use of orange oil can help to control aphid populations and promote healthy plant growth.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("એફિડ")}>
        <Text style={styles.buttonText}>આને ગુજરાતીમાં વાંચો</Text>
      </TouchableOpacity>
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

export default PestPageAphid;
