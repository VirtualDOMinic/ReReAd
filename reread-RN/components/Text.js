import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';


export default Text = ({ children }) => <RNText style={styles.text}>{children}</RNText>

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    paddingVertical: 20,
    color: "#2D3B3A"
  }
})