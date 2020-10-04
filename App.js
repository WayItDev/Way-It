import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SignInScreen from './src/screens/SignInScreen';


export default class App extends React.Component {
  render(){
    return (
        <SignInScreen />
    );
  }
}

const styles = StyleSheet.create({


});