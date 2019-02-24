import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { connect } from "react-redux";
import Text from "../components/Text"
import { appData } from "../appData"

class EndJourney extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Thanks for following through!</Text>
        <Button
          text="return home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default connect(state => ({ reflect: state.reflect }))(EndJourney);
