import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements'; 


export default class SignInScreen extends React.Component {
  render(){

  
    return (
      
      <View style= {styles.inputView}>

      <Header
        centerComponent={{ text: 'Way-It', style: { color: '#373a40', fontSize: 24 } }}
        containerStyle={{
          backgroundColor: '#665eff',
          justifyContent: 'space-around',
          marginTop: '-40%',
          marginBottom: '50%'
        }}
      /> 
          <Input
            placeholder='Username'
            leftIcon={
              <Icon
                name='user'
                size={21}
                color='black'
              />
            }
          />

          <Input placeholder="Password" secureTextEntry={true}
            leftIcon={
              <Icon 
              name='key'
              size= {21}
              color= 'black'
              />
                    }
            />

              <Button 
                title="Continue"
                color= "#665eff"
                
              />
                        
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
    maxHeight: '100%',
    
  },

});