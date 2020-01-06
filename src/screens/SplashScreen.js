import React, { Component } from 'react';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';
import {Image} from 'react-native';
import {images} from '../constants/images';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      this.checkAuth()
  }

  checkAuth = () => {
      setTimeout(() => {
        this.props.navigation.navigate('Auth');
      }, 2000);
  }

  render() {
    return (
      <Box style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Box style={{marginBottom: 16}}>
            <Image style={{width: 150, height: 150}} source={images.logo}/>
          </Box>
          <Box style={{alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize: 25}}>In<Text style={{fontSize: 25, color: '#64DD17'}}>Store</Text></Text>
            <Text>Easy Grossary Shopping</Text>
          </Box>
      </Box>
    );
  }
}

export default HomeScreen;
