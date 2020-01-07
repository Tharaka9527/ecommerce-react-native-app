import React from 'react';
import { ActivityIndicator } from 'react-native';
import { UtilityThemeProvider, Box , Text } from 'react-native-design-utility';

import Routes from './src/screens/Routes';
import {images} from './src/constants/images';
import {cacheImages} from './src/utils/cacheimages';
import {theme} from './src/constants/theme';

export default class App extends React.Component {

  state  = {
    isReady: false
  }

  componentDidMount() {
    this.cacheAssets()
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images));
    await Promise.all([...imagesAssets]);
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Box style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: '#FAFAFA'}}>
          <ActivityIndicator size="large" />
        </Box>
      )
    }

    return (
      <UtilityThemeProvider theme={theme}>
        <Routes/>
      </UtilityThemeProvider>
    );
  }
}
