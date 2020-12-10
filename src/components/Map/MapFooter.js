import React from 'react'
import MapView from 'react-native-maps'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Icon } from 'react-native-elements'


// Initializing of the MapScreen
const MapFooter = (props) => {
  console.log(props.text)
  return (
  <View style={styles.container}>
    <View style={styles.text}>
    <Icon name="angle-up" type="font-awesome" color="#707070"/>
    <Text>{props.text}</Text>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E43',
    flex: 1,
    justifyContent: "flex-start"
  },
  text: {
    alignSelf: "flex-start"
  },
})

export default MapFooter
