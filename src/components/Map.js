import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Map =()=>{
  return(
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude:-19.932504,
        longitude:-43.9568007
      }}
    >
    </MapView>
  )
}

const styles = StyleSheet.create({
  map:{
    height: windowHeight
  }
})

export default Map