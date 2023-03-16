import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Sidebar from './NavBar';


const PestPageAphidGujurati = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Sidebar></Sidebar>
      <Image
        style={styles.bannerImage}
        source={require('./aphid.jpg')}
      />
      <Text style={styles.heading}>એફિડ્સ, ગુજરાત</Text>
      <Text style={styles.text}>
      એફિડ એ એક સામાન્ય જીવાત છે જે ગુજરાત, ભારતમાં કપાસના પાક પર નોંધપાત્ર અસર કરી શકે છે. આ નાના, રસ ચૂસનાર જંતુઓ કપાસના છોડના પાંદડા અને દાંડીને ખવડાવે છે, જેનાથી નુકસાન થાય છે અને વૃદ્ધિ અટકી જાય છે. આનાથી ઉપજમાં ઘટાડો અને કપાસની ગુણવત્તા ઓછી થઈ શકે છે. વધુમાં, એફિડ વાયરસ પણ પ્રસારિત કરી શકે છે જે છોડને વધુ નુકસાન પહોંચાડી શકે છે. ગુજરાતના ખેડૂતો તેમના કપાસના પાકને બચાવવા અને સફળ પાકની ખાતરી કરવા માટે સાંસ્કૃતિક પ્રથાઓ, કુદરતી શિકારીઓ અને કાર્બનિક જંતુનાશકો સહિત એફિડને નિયંત્રિત કરવા માટે વિવિધ પદ્ધતિઓનો ઉપયોગ કરી શકે છે.
      </Text> 
      <Text style={styles.heading}> ઉપદ્રવમાં મદદ કરવા માટે કાર્બનિક જંતુનાશકો</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• જંતુનાશક સાબુ</Text>
        <Text style={styles.listItemText}>
        જંતુનાશક સાબુ એ એક પ્રકારનું જંતુનાશક છે જેનો ઉપયોગ છોડ પર વિવિધ પ્રકારના જંતુનાશકોને નિયંત્રિત કરવા માટે થઈ શકે છે. તે ફેટી એસિડના પોટેશિયમ ક્ષારના દ્રાવણમાંથી બનાવવામાં આવે છે, જે જંતુના શરીર પરના રક્ષણાત્મક આવરણને ઓગાળીને કામ કરે છે. આનાથી જંતુ નિર્જલીકરણ અને મૃત્યુ પામે છે. જંતુનાશક સાબુને સામાન્ય રીતે જંતુઓને નિયંત્રિત કરવાની સલામત અને અસરકારક પદ્ધતિ માનવામાં આવે છે, કારણ કે તે મનુષ્યો અને સૌથી ફાયદાકારક જંતુઓ માટે બિન-ઝેરી છે. જો કે, લેબલ પરની સૂચનાઓને કાળજીપૂર્વક વાંચવી અને તેનું પાલન કરવું અગત્યનું છે, કારણ કે ઉત્પાદનનો વધુ પડતો ઉપયોગ અથવા દુરુપયોગ છોડને નુકસાન પહોંચાડી શકે છે અથવા લાભદાયી જંતુઓને અકારણ નુકસાન પહોંચાડી શકે છે.
        </Text>
        <Text style={styles.listItem}>• નારંગી તેલ</Text>
        <Text style={styles.listItemText}>
        નારંગી તેલ એ કુદરતી જંતુનાશક છે જે એફિડ્સ, નાના રસ ચૂસતા જંતુઓ જે છોડને નુકસાન પહોંચાડી શકે છે તેના નિયંત્રણમાં અસરકારક છે. નારંગીની છાલમાંથી તેલ કાઢવામાં આવે છે અને તેમાં ડી-લિમોનીન નામનું સંયોજન હોય છે, જે જંતુનાશક ગુણધર્મો ધરાવે છે. જ્યારે છોડ પર છંટકાવ કરવામાં આવે છે, ત્યારે તેલ એફિડ્સને તેમની શ્વસનતંત્રને બંધ કરીને ગૂંગળાવે છે, જેના કારણે તેઓ મૃત્યુ પામે છે. નારંગી તેલ મનુષ્યો અને પાલતુ પ્રાણીઓ માટે સલામત છે, અને તે લેડીબગ્સ અથવા મધમાખી જેવા ફાયદાકારક જંતુઓને નુકસાન કરતું નથી. નારંગી તેલનો નિયમિત ઉપયોગ એફિડની વસ્તીને નિયંત્રિત કરવામાં અને તંદુરસ્ત છોડના વિકાસને પ્રોત્સાહન આપવામાં મદદ કરી શકે છે.
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

export default PestPageAphidGujurati;
