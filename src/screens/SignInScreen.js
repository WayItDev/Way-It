import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignInScreen extends React.Component {
  render(){

    state={
      email:"",
      password:""
    }

    return (
      <View style= {styles.inputView}>
        
        <TouchableOpacity>
        <Text style={styles.SignUpBtn}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>

        <TextInput    // email placeholder
         style={styles.inputEmail}
         placeholder="Email..." 
         placeholderTextColor="#003f5c"
         onChangeText={text => this.setState({email:text})}/>
          
          <TextInput    // ww placeholder
          style={styles.inputPassword}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>

         <TouchableOpacity>
          <Text style= {styles.forgot}> Forgot Password? </Text>
         </TouchableOpacity> 

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#9ab3f5",    
  },

  inputEmail: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    marginTop:50
  }, 

  inputPassword: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    marginTop:-50
  }, 

  forgot:{
    marginBottom: 25,
    color:"black",
    fontSize:11
  }, 

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:15,
    height:50,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10
  },
  
  SignUpBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:15,
    height:50,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10
  },

});