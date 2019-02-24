import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { connect } from "react-redux";
import Text from "../components/Text"
import { appData } from "../appData"

class Home extends Component {
  render() {
    const { navigation, reflections } = this.props
    console.log('reflections,', reflections.length > 0 && reflections.map((item, index) => (
      item
    )))
    return (
      <View>
        <Text>Hello! Welcome to ReReAd</Text>
        <Text>What would you like to reflect on?</Text>
        {reflections.length > 0 && reflections.map((item, index) => (
          <Button
            key={index + item.title}
            text={item.title}
            onPress={() => navigation.navigate("Reflect", { number: index })}
          />
        ))}
        <Button
          text={appData.reflectionButtonText}
          onPress={() => navigation.navigate("Add")}
        />
      </View>
    );
  }
}

export default connect(state => ({ reflections: state.reflect }))(Home);
