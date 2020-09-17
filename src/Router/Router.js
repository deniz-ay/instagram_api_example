import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer, useLinkProps} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginPage from '../Screens/LoginPage'
import Register from '../Screens/Register'
import Home from '../Screens/Home'
import AddItem from '../Screens/AdddItem'
import { navigationRef,replace } from './RootNavigation';
import {USERS, USER_ID} from '../Actions/types'
import AsyncStorage from '@react-native-community/async-storage';
const Stack=createStackNavigator();
const Router = () => {
  return(
  <NavigationContainer  ref={navigationRef}>
    <Stack.Navigator  >
      <Stack.Screen name='Login' component={LoginPage}

      />
        <Stack.Screen name='AddItem' component= {AddItem} />
      <Stack.Screen name='Home' component={Home}
      

      options={({navigation})=>({
           headerTitle:'',
        headerLeft:() => (
          <Text onPress={(()=>{
            AsyncStorage.removeItem(USER_ID)
            USERS.token=null
          navigation.replace ('Login')

          })}>Log Out</Text>
        ),

        headerRight:() => (
          <Text onPress={(()=>{
          navigation.navigate('AddItem')

          })}
          style={{fontSize:35,margin:10}}
          
          >+</Text>
        )        
      })}

      

      />
      <Stack.Screen name='Register' component={Register} 
       />
  
    </Stack.Navigator>
  </NavigationContainer>
);}

export default Router;
