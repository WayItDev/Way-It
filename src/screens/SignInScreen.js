import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button } from 'react-native-elements'
import Header from '../components/authentication/header'

const SignUpScreen = () => {
  initialState = {
    email: '',
    password: '',
  }
  const [email, setEmail] = useState(initialState)
  const [password, setPassword] = useState(initialState)

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header />
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput style={styles.textInput} placeholder="Password" />
      
        <Button
          type="solid"
          raised
          containerStyle={{ width: '90%' }}
          title="CONTINUE"
          buttonStyle={{ borderRadius: 10, backgroundColor: '#665EFF', padding: 15, }}
        />
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '65%',
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 12,
    elevation: 1,
    padding: 8,
    marginBottom: 30,
  },
})

export default SignUpScreen
