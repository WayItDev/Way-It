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
        
        <View style= {styles.containerLogin}>
            <TouchableOpacity>
            <Text style={styles.SignInBtn}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.loginBtn}>Log In</Text>
            </TouchableOpacity>
        </View>

         
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
            <Text style={styles.ContBtn}>Continue</Text>
            </TouchableOpacity>

         <TouchableOpacity>
          <Text style= {styles.forgot}> Forgot Password? </Text>
         </TouchableOpacity> 

      </View>
    );
  }
}

const styles = StyleSheet.create({

 
  inputView: {
    backgroundColor:"#f1f3f4",  
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',  
    maxHeight: '90%',
    
  },

   containerLogin: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 5,

   }, 

  inputEmail: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    borderRadius: 50,
    borderBottomColor: '#3282b8',
    textShadowColor: '#4d80e4', 
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
    backgroundColor:"#665eff",
    borderRadius:15,
    height:50,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10,
    marginRight:35,
    color: '#F1F1F1', 
  },
  
  SignInBtn:{
    width:"80%",
    backgroundColor:'#665eff',
    borderRadius:15,
    height:50,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10,
    color: '#F1F1F1',
  },

  ContBtn:{
    width:"80%",
    backgroundColor:'#665eff',
    borderRadius:15,
    height:50,
    width:350,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10,
    color: '#F1F1F1',
  },

});