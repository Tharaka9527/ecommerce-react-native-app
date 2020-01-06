import React, { Component } from 'react';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Box style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Login Screen</Text>
      </Box>
    );
  }
}

export default LoginScreen;
