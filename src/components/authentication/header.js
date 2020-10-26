import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'

const HeaderButtons = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="SIGN IN" buttonStyle={{borderRadius: 12, backgroundColor: 'white'}} titleStyle={{color: "#78849e"}}/>
        <Button title="SIGN UP" buttonStyle={{borderRadius: 12, backgroundColor: '#665EFF'}}/>
      </SafeAreaView>
    )
  }

  export default HeaderButtons

  const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-around',
    },
  })