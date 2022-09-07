import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState(0)
  const [result, setResult] = useState("Guess a number between 1-100")
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [count, setCount] = useState(1);



  const go = () => {

    setCount(count + 1)


    if (number == guess) {

      return Alert.alert('You guessed the number in ' + count + ' guesses')


    } else if (number > guess) {
      return setResult("Your guess " + String(guess) + " was too low")
    } else {
      return setResult("Your guess " + String(guess) + " was too high")
    }


  }



  return (
    <><View style={styles.container}>
      <Text></Text>
      <Text>{result}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={guess => setGuess(guess)} value={guess} />
      <StatusBar style="auto" />
      {/*} <Text>Number was: {number} </Text> */}

    </View>
      <View style={styles.container2}>
        <Button onPress={go} title="Make a guess" />
        <StatusBar style="auto" />
      </View></>


  );
};

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
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});