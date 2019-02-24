import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';


export default Input = ({ onChangeText, value }) => <View style={styles.container}><TextInput
  style={styles.input}
  onChangeText={onChangeText}
  autoCapitalize="none"
  multiline={true}
  value={value}
/>
</View>

const styles = StyleSheet.create({
  input: {
    width: 300,
    paddingHorizontal: 20,
    height: 40,
    fontSize: 25,
    color: "#2C504E"
  },
  container: {
    paddingVertical: 30,
    width: 300,
    height: 40,
    backgroundColor: '#F1EDED',
    alignItems: "center",
    justifyContent: "center",
  }
})