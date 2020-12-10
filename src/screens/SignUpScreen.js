import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import {Button} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const SignUpScreen = ({ navigation }) => {
  initialState = {
    email: '',
    password: '',
  }
  const [email, setEmail] = useState(initialState)
  const [password, setPassword] = useState(initialState)

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Button title="SIGN IN" onPress={() => navigation.navigate('SignIn')} buttonStyle={{borderRadius: 12, backgroundColor: 'white'}}  titleStyle={{color: "#78849e"}}/>
        <Button title="SIGN UP" buttonStyle={{borderRadius: 12, backgroundColor: '#665EFF'}}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <TextInput style={styles.textInput} placeholder="Confirm Password" />
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
  header: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
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