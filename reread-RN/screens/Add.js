import React, { Component } from "react";
import Text from "../components/Text"
import Input from "../components/Input"
import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";
import { appData } from "../appData"


class Add extends Component {
  state = {
    page: 0,
    data: {
      title: '',
      alternatives: '',
      longTerm: ''
    }
  }

  nextPage = () => this.setState((state) => ({
    page: state.page + 1
  }))

  finished = () => {
    this.props.addReflection(this.state.data)
    this.props.navigation.navigate("EndJourney")
  }
  render() {
    const { navigation } = this.props;
    const type = Object.keys(appData.bad)[this.state.page]
    return (
      <>
        <Text>{appData.bad[type]}</Text>
        <Input
          onChangeText={text => this.setState({ data: { ...this.state.data, [type]: text } })}
          value={this.state.data[type]}
        />
        {this.state.page + 1 === Object.keys(appData.bad).length ?
          <Button text="confirm" onPress={this.finished} /> :
          <Button
            text="next"
            onPress={this.nextPage}
          />}
      </>
    )
  }
}


export default connect(
  state => ({
    reflect: state.reflect
  }), {
    addReflection,
  }
)(Add);
