import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState ('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
<Text> {outputText} </Text>
      <Button title="Change Me!" onPress={() => setOutputText('The Text is Changes to This!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
