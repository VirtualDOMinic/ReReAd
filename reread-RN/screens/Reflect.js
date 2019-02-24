import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";

const Reflect = (props) =>
  (
    <>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Button
        text="hello"
        onPress={() => console.log(props.state)}
      />
      <Text>Dummy text here! REFLECT PLS</Text>
      <Button
        text="dispatch"
        onPress={() => props.adddd()}
      />
    </>
  );

const mapDispatchToProps = {
  adddd: addReflection,
}


const mapStateToProps = function (state) {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reflect);
