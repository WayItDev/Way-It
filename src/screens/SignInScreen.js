import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
<<<<<<< Updated upstream
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
=======
import {Button} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/userAction'

const onLogin = () => {
  const email = email
  const password = password
  console.log(email, password)
}

const SignInScreen = ({ props, navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Button title="SIGN IN" buttonStyle={{borderRadius: 12, backgroundColor: '#665EFF'}}/>
        <Button title="SIGN UP" onPress={() => navigation.navigate('SignUp')} buttonStyle={{borderRadius: 12, backgroundColor: 'white'}} titleStyle={{color: "#78849e"}}/>
      </View>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail({ email })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password" 
          value={password}
          onChangeText={(password) => setPassword({ password })}
          secureTextEntry={true}
        />
        <Button
          type="solid"
          raised
          containerStyle={{ width: '90%' }}
          title="LOGIN"
          buttonStyle={{ borderRadius: 10, backgroundColor: '#665EFF', padding: 15, }}
        />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  header: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
  },
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
export default SignUpScreen
=======
const mapStateToProps = (state) => ({
  user: state.user
})

const MapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, MapActionsToProps)(SignInScreen)
>>>>>>> Stashed changes
