import React, {useState, useEffect} from 'react'
import MapView from 'react-native-maps'
import { View, StyleSheet, Dimensions, Platform, Text } from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import MapFooter from '../components/Map/MapFooter'

// Initializing of the MapScreen
const HomeScreen = () => {
  return(
  <View style={styles.container}>
    {/* <MapView
      style={styles.mapStyle} 
      showsUserLocation={true}
    /> */}
    <Text>hoi</Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E43',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default HomeScreen
