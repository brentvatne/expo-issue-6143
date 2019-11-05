import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import scrypt from 'react-native-scrypt';

const password = 'correct horse battery staple'
const salt = [0, 1, 2];

export default function App() {
  let [result, setResult] = React.useState(null);

  React.useEffect(() => {
    async function runScrypt() {
      let value = await scrypt(password, salt)
      setResult(value);
    }

    runScrypt();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{result ? result : 'Waiting...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
