import React, { Component } from 'react';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';
import {Image, TouchableOpacity} from 'react-native';
import {images} from '../constants/images';
import {theme} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const bgColor = type => {
    switch (type) {
        case 'google':
            return '#4285F4';
        case 'facebook':
            return '#3b5999';
        default:
            return '#FAFAFA';
    }
}

const LoginButton = ({children, type, onPress}) => (
    <TouchableOpacity onPress={onPress}>
          <Box style={{marginBottom: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', 
                    backgroundColor: bgColor(type), alignSelf: 'center', width: "80%", padding: 6}}>
            <Box style={{marginRight: 20}}>
              <Box style={{position: 'relative', backgroundColor: '#FAFAFA', height: 32, width: 32, alignItems: 'center'}}>
                  {type == 'google' && <Icon style={{position: 'absolute', top: 3}} name="google" size={28} color="#4285F4"/>}
                  {type == 'facebook' && <Icon style={{position: 'absolute', top: 3}} name="facebook" size={28} color="#3b5999"/>}
              </Box>
            </Box>
            <Box>
                <Text style={{color: '#FAFAFA', fontSize: 18}}>{children}</Text>
            </Box>
          </Box>
        </TouchableOpacity>
);

export default LoginButton;
