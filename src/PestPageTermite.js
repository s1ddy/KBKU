import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from './NavBar';

const PestPageTermite = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Navbar />
      <Image
        style={styles.bannerImage}
        source={require('./Termite.jpeg')}
      />
      <Text style={styles.heading}>Termites, Karnataka</Text>
      <Text style={styles.text}>
        Termites pose a significant threat to potato crops in Karnataka, a state in southern India. These pests feed on the roots of potato plants, causing damage that can reduce crop yield and quality. The damage is particularly severe during the early growth stages of the plant, leading to stunted growth, wilting, and death of the plant. This can have serious economic consequences for farmers who rely on potato crops. To combat the damage caused by termites, farmers can use a range of strategies, including chemical treatments, crop rotation, and planting termite-resistant potato varieties. These efforts can help mitigate the impact of termite infestations and protect potato crops in Karnataka
      </Text>
      <Text style={styles.heading}> Organic Pesticides To Help Infestation</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Neem Oil</Text>
        <Text style={styles.listItemText}>Neem oil is a natural pesticide and insect repellent that is derived from the seeds of the neem tree. It is commonly used in organic farming to control pests and diseases, including termites. Neem oil contains azadirachtin, which disrupts the growth and development of insects, making it an effective alternative to conventional chemical pesticides. Neem oil is non-toxic to humans and animals, but it should still be used with caution and in accordance with its instructions. Neem oil is also used in traditional medicine for its antibacterial and antifungal properties.</Text>
        <Text style={styles.listItem}>• Orange Oil</Text>
        <Text style={styles.listItemText}>Orange oil is a natural pesticide derived from orange peels that is effective in treating termites. It contains a compound called d-limonene, which is toxic to termites and can kill them on contact. Orange oil can be applied directly to infested wood or soil, where it penetrates deep into the termite galleries and kills them. It is considered an eco-friendly and non-toxic alternative to conventional chemical pesticides. However, it may not be as effective as other treatments and may require repeated applications to fully eliminate the termite infestation.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ಗೆದ್ದಲು")}>
        <Text style={styles.buttonText}>ಇದನ್ನು ಕನ್ನಡದಲ್ಲಿ ಓದಿ</Text>
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

export default PestPageTermite;