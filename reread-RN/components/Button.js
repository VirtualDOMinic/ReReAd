import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default Button = ({ text, onPress }) => <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.text}>{text}</Text></TouchableOpacity>

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#53F6EC",
    color: "#2D3B3A",
    marginTop: 40,
    fontWeight: 'bold',
    textAlign: "center"
  }
})