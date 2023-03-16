import React, { useState } from 'react';
import { Button } from 'react-native';
import * as Speech from 'expo-speech';

const ReadButton = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handlePress = async () => {
    try {
      if (isSpeaking) {
        await Speech.stop();
      } else {
        await Speech.speak(text, {
          language: 'en-US',
        });
      }
      setIsSpeaking(!isSpeaking);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button title={isSpeaking ? 'Stop Reading' : 'Read'} onPress={handlePress} />
  );
};

export default ReadButton;
