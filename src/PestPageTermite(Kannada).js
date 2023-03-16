import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from './NavBar';

const PestPageTermiteKannada = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Navbar />
      <Image
        style={styles.bannerImage}
        source={require('./Termite.jpeg')}
      />
      <Text style={styles.heading}>ಗೆದ್ದಲು, ಕರ್ನಾಟಕ</Text>
      <Text style={styles.text}>
      ಗೆದ್ದಲುಗಳು ದಕ್ಷಿಣ ಭಾರತದ ರಾಜ್ಯವಾದ ಕರ್ನಾಟಕದಲ್ಲಿ ಆಲೂಗೆಡ್ಡೆ ಬೆಳೆಗಳಿಗೆ ಗಮನಾರ್ಹ ಅಪಾಯವನ್ನುಂಟುಮಾಡುತ್ತವೆ. ಈ ಕೀಟಗಳು ಆಲೂಗೆಡ್ಡೆ ಸಸ್ಯಗಳ ಬೇರುಗಳನ್ನು ತಿನ್ನುತ್ತವೆ, ಇದರಿಂದಾಗಿ ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು. ಸಸ್ಯದ ಆರಂಭಿಕ ಬೆಳವಣಿಗೆಯ ಹಂತಗಳಲ್ಲಿ ಹಾನಿಯು ವಿಶೇಷವಾಗಿ ತೀವ್ರವಾಗಿರುತ್ತದೆ, ಇದು ಕುಂಠಿತ ಬೆಳವಣಿಗೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ, ಕುಂಠಿತಗೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಸಸ್ಯದ ಸಾವಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ. ಇದು ಆಲೂಗೆಡ್ಡೆ ಬೆಳೆಗಳನ್ನು ಅವಲಂಬಿಸಿರುವ ರೈತರಿಗೆ ಗಂಭೀರ ಆರ್ಥಿಕ ಪರಿಣಾಮಗಳನ್ನು ಉಂಟುಮಾಡಬಹುದು. ಗೆದ್ದಲುಗಳಿಂದ ಉಂಟಾಗುವ ಹಾನಿಯನ್ನು ಎದುರಿಸಲು, ರೈತರು ರಾಸಾಯನಿಕ ಚಿಕಿತ್ಸೆಗಳು, ಬೆಳೆ ತಿರುಗುವಿಕೆ ಮತ್ತು ಗೆದ್ದಲು-ನಿರೋಧಕ ಆಲೂಗಡ್ಡೆ ಪ್ರಭೇದಗಳನ್ನು ನೆಡುವುದು ಸೇರಿದಂತೆ ಹಲವಾರು ತಂತ್ರಗಳನ್ನು ಬಳಸಬಹುದು. ಈ ಪ್ರಯತ್ನಗಳು ಗೆದ್ದಲು ದಾಳಿಯ ಪರಿಣಾಮವನ್ನು ತಗ್ಗಿಸಲು ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ಆಲೂಗಡ್ಡೆ ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ
      </Text>
      <Text style={styles.heading}> ಮುತ್ತಿಕೊಳ್ಳುವಿಕೆಗೆ ಸಹಾಯ ಮಾಡಲು ಸಾವಯವ ಕೀಟನಾಶಕಗಳು</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• ಬೇವಿನ ಎಣ್ಣೆ</Text>
        <Text style={styles.listItemText}>ಬೇವಿನ ಎಣ್ಣೆಯು ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕ ಮತ್ತು ಕೀಟ ನಿವಾರಕವಾಗಿದ್ದು ಇದನ್ನು ಬೇವಿನ ಮರದ ಬೀಜಗಳಿಂದ ಪಡೆಯಲಾಗುತ್ತದೆ. ಗೆದ್ದಲು ಸೇರಿದಂತೆ ಕೀಟಗಳು ಮತ್ತು ರೋಗಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಾವಯವ ಕೃಷಿಯಲ್ಲಿ ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಬೇವಿನ ಎಣ್ಣೆಯು ಅಜಾಡಿರಾಕ್ಟಿನ್ ಅನ್ನು ಹೊಂದಿರುತ್ತದೆ, ಇದು ಕೀಟಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ಬೆಳವಣಿಗೆಯನ್ನು ಅಡ್ಡಿಪಡಿಸುತ್ತದೆ, ಇದು ಸಾಂಪ್ರದಾಯಿಕ ರಾಸಾಯನಿಕ ಕೀಟನಾಶಕಗಳಿಗೆ ಪರಿಣಾಮಕಾರಿ ಪರ್ಯಾಯವಾಗಿದೆ. ಬೇವಿನ ಎಣ್ಣೆ ಮಾನವರು ಮತ್ತು ಪ್ರಾಣಿಗಳಿಗೆ ವಿಷಕಾರಿಯಲ್ಲ, ಆದರೆ ಅದನ್ನು ಇನ್ನೂ ಎಚ್ಚರಿಕೆಯಿಂದ ಮತ್ತು ಅದರ ಸೂಚನೆಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಬಳಸಬೇಕು. ಬೇವಿನ ಎಣ್ಣೆಯನ್ನು ಅದರ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಆಂಟಿಫಂಗಲ್ ಗುಣಲಕ್ಷಣಗಳಿಗಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ಔಷಧಿಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.</Text>
        <Text style={styles.listItem}>• ಕಿತ್ತಳೆ ಎಣ್ಣೆ</Text>
        <Text style={styles.listItemText}>ಕಿತ್ತಳೆ ಎಣ್ಣೆಯು ಕಿತ್ತಳೆ ಸಿಪ್ಪೆಗಳಿಂದ ಪಡೆದ ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕವಾಗಿದ್ದು, ಗೆದ್ದಲುಗಳ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ. ಇದು ಡಿ-ಲಿಮೋನೆನ್ ಎಂಬ ಸಂಯುಕ್ತವನ್ನು ಹೊಂದಿರುತ್ತದೆ, ಇದು ಗೆದ್ದಲುಗಳಿಗೆ ವಿಷಕಾರಿಯಾಗಿದೆ ಮತ್ತು ಸಂಪರ್ಕದಲ್ಲಿ ಅವುಗಳನ್ನು ಕೊಲ್ಲುತ್ತದೆ. ಕಿತ್ತಳೆ ಎಣ್ಣೆಯನ್ನು ನೇರವಾಗಿ ಸೋಂಕಿತ ಮರ ಅಥವಾ ಮಣ್ಣಿಗೆ ಅನ್ವಯಿಸಬಹುದು, ಅಲ್ಲಿ ಅದು ಗೆದ್ದಲು ಗ್ಯಾಲರಿಗಳಲ್ಲಿ ಆಳವಾಗಿ ತೂರಿಕೊಂಡು ಅವುಗಳನ್ನು ಕೊಲ್ಲುತ್ತದೆ. ಸಾಂಪ್ರದಾಯಿಕ ರಾಸಾಯನಿಕ ಕೀಟನಾಶಕಗಳಿಗೆ ಇದು ಪರಿಸರ ಸ್ನೇಹಿ ಮತ್ತು ವಿಷಕಾರಿಯಲ್ಲದ ಪರ್ಯಾಯವೆಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ. ಆದಾಗ್ಯೂ, ಇದು ಇತರ ಚಿಕಿತ್ಸೆಗಳಂತೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿಲ್ಲದಿರಬಹುದು ಮತ್ತು ಗೆದ್ದಲು ಮುತ್ತಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೊಡೆದುಹಾಕಲು ಪುನರಾವರ್ತಿತ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು ಬೇಕಾಗಬಹುದು.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Termite")}>
        <Text style={styles.buttonText}>Read this in English</Text>
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

export default PestPageTermiteKannada;