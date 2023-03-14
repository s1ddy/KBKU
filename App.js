import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import pesticidesData from './pesticides.json';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Karnataka', value: 'Karnataka' },
  { label: 'Kerala', value: 'Kerala' },
  { label: 'Punjab', value: 'Punjab' },
  { label: 'Maharashtra', value: 'Maharashtra' },
  { label: 'Gujarat', value: 'Gujarat' },
  { label: 'Tamil Nadu', value: 'Tamil Nadu' },
  { label: 'West Bengal', value: 'West Bengal' },
  { label: 'Haryana', value: 'Haryana' },
];


const PesticideApp = () => {
  const [plant, setPlant] = useState('');
  const [state, setState] = useState('');
  const [pesticide, setPesticide] = useState('');


  const searchPesticide = () => {
    let foundPesticide = '';
    pesticidesData.main.forEach((data) => {
      if (data.plant.toLowerCase() === plant.toLowerCase() && data.states.includes(state)) {
        foundPesticide = data.pesticide;
      }
    });
    setPesticide(foundPesticide);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Pesticides</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter plant name"
        value={plant}
        onChangeText={text => setPlant(text)}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select state"
        searchPlaceholder="Search..."
        value={state}
        onChange={item => {
          setState(item.value);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={searchPesticide}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {pesticide !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Pesticide for {plant} in {state}: {pesticide}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
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
  },
  result: {
    margin: 20,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdown: {
    width: '80%',
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default PesticideApp;
