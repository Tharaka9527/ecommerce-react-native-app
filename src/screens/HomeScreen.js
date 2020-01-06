import React, { Component } from 'react';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Box style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Home Screen</Text>
      </Box>
    );
  }
}

export default HomeScreen;
