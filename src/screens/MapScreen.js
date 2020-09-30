import React from 'react'
import MapView from 'react-native-maps'
import { View, StyleSheet, Dimensions } from 'react-native'

// Initializing of the MapScreen
const MapScreen = () => (
  <View style={styles.container}>
    <MapView style={styles.mapStyle} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default MapScreen
