import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.yellowview}>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
      <View style = {styles.blueview}></View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: 'white'
  },
  yellowview: {
    flex: 1,
    flexDirection : 'row',
    backgroundColor: 'yellow'
  },
  blueview: {
    flex: 1,
    backgroundColor: 'blue'
  }

});
