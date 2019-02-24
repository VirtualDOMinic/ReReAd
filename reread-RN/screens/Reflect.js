

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text"
import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";

const questions = {
  title: "Do you want to ",
  alternatives: "How about instead, ",
  // shortTerm: "",
  // later: "...",
  longTerm: "Think about your future goal of "
}

class Reflect extends Component {
  state = {
    page: 0,
  }

  nextPage = () => this.setState((state) => ({
    page: state.page + 1
  }))

  render() {
    const { navigation, reflections } = this.props
    const data = reflections[navigation.getParam('number', 0)]
    const currentQuestion = Object.keys(data)[this.state.page]
    return (
      <>
        <Text>{questions[currentQuestion] + data[currentQuestion]}</Text>
        {this.state.page === 0 ?
          <Button
            text="Yes"
            onPress={this.nextPage}
          /> :
          (<><Button
            text="Ok then"
            onPress={() => navigation.navigate("EndJourney")}
          />
            <Button
              text="No"
              onPress={this.state.page + 1 === Object.keys(data).length ? () => navigation.navigate("EndJourney") : this.nextPage}
            /></>)}
      </>
    )
  }
}


export default connect(
  state => ({
    reflections: state.reflect
  }), {
    addReflection,
  }
)(Reflect);
