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
        <MapView.Marker
          coordinate={{
            latitude:-19.9301121,
            longitude:-43.9570094
          }}
          title = {"Van de Velde, Contorno"}
          description = {"Ponto de ônibus em frente a barbearia"}
        />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map:{
    height: windowHeight
  }
})

export default Map