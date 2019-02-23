import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";

class Reflect extends React.Component {
  render() {
    return (
      <>
        <Text>Dummy text here! REFLECT PLS</Text>
        <Button
          text="hello"
          onPress={() => this.props.dispatch({ type: "ADD_REFLECTION" })}
        />
      </>
    );
  }
}

export default connect()(Reflect);
