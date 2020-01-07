import React, { Component } from 'react';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';
import {Image, TouchableOpacity, Alert, Animated} from 'react-native';
import {images} from '../constants/images';
import LoginButton from '../comments/LoginButton';
import Logo from '../comments/Logo';

class LoginScreen extends Component {
  
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
    //this.opacityAnim();
    //this.positionAnim();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
    }).start();
  }

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  onGooglePress = () => {
    Alert.alert('Google Press');
  }

  onFacebookPress = () => {
    Alert.alert('Facebook Press');
  }

  render() {
    const {opacity} = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [40, 0],
    });

    return (
      <Box style={{flex:1, alignItems:'center', justifyContent:'center'}}>

        <Animated.View style={{flex:1, transform: [{
          translateY: logoTranslate,
        }]}}>
          <Box style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Logo/>
          </Box>
        </Animated.View>
        
        <Animated.View style={{flex:0.9, width: '100%', opacity}}>
          <LoginButton onPress={this.onGooglePress} type="google">Continue with Google</LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">Continue with Facebook</LoginButton>
        </Animated.View>

      </Box>
    );
  }
}

export default LoginScreen;
