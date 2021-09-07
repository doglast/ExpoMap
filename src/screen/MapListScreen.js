import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';

const MapListScreen = ({navigation}) =>{
  return(
    <SafeAreaView forceInset={{top:'always'}} >
      <Text>Map List Screen</Text>
    </SafeAreaView>
  )
}

export default MapListScreen;