import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default Button = ({text, onPress}) => <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.text}>{text}</Text></TouchableOpacity>

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        padding: 3
    },
    text: {
        fontSize: 25,
        color: "white"
    }
})