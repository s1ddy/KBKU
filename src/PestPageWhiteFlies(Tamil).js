import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Sidebar from './NavBar';


const PestPageWhiteFlies = () => {
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
        Horticultural oils are a type of reduced-risk pesticide that can be used to control insect pests on plants. They work by smothering eggs, larvae, and adult insects. Horticultural oils can be applied in winter or early spring and are effective in controlling scale insects. These oils may provide suppression of aphids, mealybugs, thrips, whiteflies, and spider mites. Thorough coverage of all plant parts is important for the effectiveness of horticultural oils. Various types of oils have been used for centuries to control insect and mite pests and remain an important tool to manage certain pests. Petroleum-based horticultural oils usually contain paraffin which is more toxic to insects/mites but safer to use on plants than other petroleum-based products.
        </Text>
        <Text style={styles.listItem}>• வேப்ப எண்ணெய்</Text>
        <Text style={styles.listItemText}>
        வேப்ப எண்ணெய் ஒரு இயற்கை பூச்சிக்கொல்லி மற்றும் பூச்சி விரட்டியாகும், இது வேப்ப மரத்தின் விதைகளிலிருந்து பெறப்படுகிறது. இது பொதுவாக கரிம வேளாண்மையில் கரையான் உள்ளிட்ட பூச்சிகள் மற்றும் நோய்களைக் கட்டுப்படுத்தப் பயன்படுகிறது. வேப்ப எண்ணெயில் அசாடிராக்டின் உள்ளது, இது பூச்சிகளின் வளர்ச்சி மற்றும் வளர்ச்சியை சீர்குலைக்கிறது, இது வழக்கமான இரசாயன பூச்சிக்கொல்லிகளுக்கு ஒரு சிறந்த மாற்றாக அமைகிறது. வேப்ப எண்ணெய் மனிதர்களுக்கும் விலங்குகளுக்கும் நச்சுத்தன்மையற்றது, ஆனால் அது இன்னும் எச்சரிக்கையுடன் மற்றும் அதன் அறிவுறுத்தல்களின்படி பயன்படுத்தப்பட வேண்டும். வேப்ப எண்ணெய் அதன் பாக்டீரியா எதிர்ப்பு மற்றும் பூஞ்சை காளான் பண்புகளுக்காக பாரம்பரிய மருத்துவத்திலும் பயன்படுத்தப்படுகிறது
        </Text>
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