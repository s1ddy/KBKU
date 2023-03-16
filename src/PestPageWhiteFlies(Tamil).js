import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import PestPage from '../PestPage';
import Sidebar from './NavBar';


const PestPageWhiteFliesTamil = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Sidebar></Sidebar>
      <Image
        style={styles.bannerImage}
        source={require('./WhiteFlies.jpeg')}
      />
      <Text style={styles.heading}> வெள்ளை ஈக்கள், தமிழ்நாடு </Text>
      <Text style={styles.text}>
      வெள்ளை ஈக்கள் சிறிய, சாறு உறிஞ்சும் பூச்சிகள், அவை அஃபிட்ஸ் மற்றும் செதில்கள் போன்ற பூச்சிகளின் குழுவைச் சேர்ந்தவை. அவை மிகவும் அழிவுகரமான பூச்சிகளாக இருக்கலாம், குறிப்பாக வெப்பமண்டல மற்றும் துணை வெப்பமண்டலங்களில். அதிக எண்ணிக்கையில் இருக்கும்போது, ​​வெள்ளை ஈ உணவளிப்பது தாவர வளர்ச்சியை பாதிக்கலாம், இதனால் இலைகளின் சிதைவு, நிறமாற்றம், மஞ்சள் அல்லது வெள்ளி நிறமாக மாறும். வெள்ளை ஈக்கள் உணவளிப்பதன் மூலம் சேதத்தை ஏற்படுத்துவதோடு மட்டுமல்லாமல் தாவர வைரஸ்களையும் பரப்பலாம். அவை தாவரங்களின் சாற்றை அகற்றுவதன் மூலம் நேரடியாக தாவரங்களை காயப்படுத்துகின்றன மற்றும் இலைகளின் மஞ்சள் அல்லது இறப்பை ஏற்படுத்தும் ஒட்டும் தேனை வெளியேற்றுகின்றன. மிகவும் பொதுவான இனங்கள் கிரீன்ஹவுஸ் ஒயிட்ஃபிளை மற்றும் புகையிலை வெள்ளை ஈ
      </Text> 
      <Text style={styles.heading}> தொற்றுக்கு உதவும் கரிம பூச்சிக்கொல்லிகள்</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• தோட்டக்கலை எண்ணெய்கள் </Text>
        <Text style={styles.listItemText}>
        தோட்டக்கலை எண்ணெய்கள் ஒரு வகை குறைக்கப்பட்ட-ஆபத்து பூச்சிக்கொல்லியாகும், இது தாவரங்களில் பூச்சி பூச்சிகளைக் கட்டுப்படுத்தப் பயன்படுகிறது. அவை முட்டைகள், லார்வாக்கள் மற்றும் வயது வந்த பூச்சிகளை அடக்குவதன் மூலம் வேலை செய்கின்றன. தோட்டக்கலை எண்ணெய்கள் குளிர்காலத்தில் அல்லது வசந்த காலத்தின் துவக்கத்தில் பயன்படுத்தப்படலாம் மற்றும் அளவு பூச்சிகளைக் கட்டுப்படுத்துவதில் பயனுள்ளதாக இருக்கும். இந்த எண்ணெய்கள் அஃபிட்ஸ், மாவுப்பூச்சிகள், த்ரிப்ஸ், வெள்ளை ஈக்கள் மற்றும் சிலந்திப் பூச்சிகளை அடக்கும். தோட்டக்கலை எண்ணெய்களின் செயல்திறனுக்கு தாவரத்தின் அனைத்து பாகங்களையும் முழுமையாகப் பாதுகாப்பது முக்கியம். பல்வேறு வகையான எண்ணெய்கள் பல நூற்றாண்டுகளாக பூச்சி மற்றும் மைட் பூச்சிகளைக் கட்டுப்படுத்த பயன்படுத்தப்பட்டு வருகின்றன மற்றும் சில பூச்சிகளை நிர்வகிக்க ஒரு முக்கிய கருவியாக இருக்கின்றன. பெட்ரோலியம் சார்ந்த தோட்டக்கலை எண்ணெய்களில் பொதுவாக பாரஃபின் உள்ளது, இது பூச்சிகள்/புழுக்களுக்கு அதிக நச்சுத்தன்மையுடையது ஆனால் மற்ற பெட்ரோலியம் சார்ந்த பொருட்களை விட தாவரங்களில் பயன்படுத்த பாதுகாப்பானது.
        </Text>
        <Text style={styles.listItem}>• வேப்ப எண்ணெய்</Text>
        <Text style={styles.listItemText}>
        வேப்ப எண்ணெய் ஒரு இயற்கை பூச்சிக்கொல்லி மற்றும் பூச்சி விரட்டியாகும், இது வேப்ப மரத்தின் விதைகளிலிருந்து பெறப்படுகிறது. இது பொதுவாக கரிம வேளாண்மையில் கரையான் உள்ளிட்ட பூச்சிகள் மற்றும் நோய்களைக் கட்டுப்படுத்தப் பயன்படுகிறது. வேப்ப எண்ணெயில் அசாடிராக்டின் உள்ளது, இது பூச்சிகளின் வளர்ச்சி மற்றும் வளர்ச்சியை சீர்குலைக்கிறது, இது வழக்கமான இரசாயன பூச்சிக்கொல்லிகளுக்கு ஒரு சிறந்த மாற்றாக அமைகிறது. வேப்ப எண்ணெய் மனிதர்களுக்கும் விலங்குகளுக்கும் நச்சுத்தன்மையற்றது, ஆனால் அது இன்னும் எச்சரிக்கையுடன் மற்றும் அதன் அறிவுறுத்தல்களின்படி பயன்படுத்தப்பட வேண்டும். வேப்ப எண்ணெய் அதன் பாக்டீரியா எதிர்ப்பு மற்றும் பூஞ்சை காளான் பண்புகளுக்காக பாரம்பரிய மருத்துவத்திலும் பயன்படுத்தப்படுகிறது
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("White flies")}>
        <Text style={styles.buttonText}>Read this in English</Text>
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

export default PestPageWhiteFliesTamil;