// React/React-Native
import axios from 'axios'
import React from 'react'
import { AsyncStorage, StyleSheet } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './src/redux/store'

// React Navigation
import 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import SignUpScreen from './src/screens/SignUpScreen'
<<<<<<< Updated upstream
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import PlacesNavigator from './src/navi/PlacesNavigator'; 


export default function App () {
  
    return <PlacesNavigator /> ; 
  }

=======
import SignInScreen from './src/screens/SignInScreen'
import HomeScreen from './src/screens/HomeScreen'
import jwtDecode from 'jwt-decode'
import { SET_AUTHENTICATED} from './src/redux/actionTypes'

import CustomDrawerContent from './src/components/Drawer/CustomDrawerContent'

axios.defaults.baseURL = 'https://way-it-api.azurewebsites.net'

const Drawer = createDrawerNavigator()
const Stack  = createStackNavigator()

const App = () => {
  const token = AsyncStorage.getItem('token')
    return (
      <NavigationContainer>
        <Provider store={store}>
          {token === '' ? (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="SignIn" component={SignInScreen}/>
              <Stack.Screen name="SignUp" component={SignUpScreen}/>
            </Stack.Navigator>
          ) : (
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen}/>
              <Drawer.Screen name="SignIn" component={SignInScreen} />
              <Drawer.Screen name="SignUp" component={SignUpScreen} />
            </Drawer.Navigator>
          )
        }
        </Provider>
      </NavigationContainer>
    )
  }
>>>>>>> Stashed changes

export default App
const styles = StyleSheet.create({})
