import React, { Component } from 'react';
import { Platform, View, Text, CheckBox } from 'react-native';


var tempCheckValues = [];
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkBoxChecked: []
    }
  }

  checkBoxChanged(id, value) {

    this.setState({
      checkBoxChecked: tempCheckValues
    })

    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({
      checkBoxChecked: tempCheckBoxChecked
    })

  }

  render() {

    const products = [{
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }];

    return (

      products.map((val) => {

        { tempCheckValues[val.id] = false }

        return (

          <View key={val.id} style={{ flexDirection: 'column' }}>

      <CheckBox

          value={this.state.checkBoxChecked[val.id]}

          onValueChange={() => this.checkBoxChanged(val.id, this.state.checkBoxChecked[val.id])}

        />

      </View >

)

}

)

);
}
}