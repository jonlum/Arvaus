import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text  } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState(0);
  
   
  

  const go = () => { 
  const number = Math.floor(Math.random() * 100) + 1;
    
    if (guess == number) {
      return 'Voitto';
    else if (condition) {
      
    } else {
      
    }(guess < number) {

    } 

    }
  };
 

  return (
    <><View style={styles.container}>
      <Text>Your guess {guess}</Text>
      <Text></Text> 
      <TextInput style={styles.input} keyboardType= 'number-pad' onChangeText={guess => setGuess(guess)} value={guess} />
      <StatusBar style="auto" />
    </View>
    <View style={styles.container2}>
        <Button onPress={go} title="Make a guess" />
        <StatusBar style="auto" />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});