import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';

const MapScreen = ({navigation}) =>{
  return(
    <SafeAreaView forceInset={{top:'always'}} >
      <Text>Map Screen</Text>
    </SafeAreaView>
  )
}

export default MapScreen;