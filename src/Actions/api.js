import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import { Alert } from 'react-native';
import * as RootNavigation from '../Router/RootNavigation'
import {USERS,USER_ID} from './types'
export const Post = (url,params,dispatch,start,succes,faild) => {

  const save = async (value) => {
    try {
      await AsyncStorage.setItem(USER_ID,value)
      console.log('Başarılı');

    }catch (err){
        console.log(err)
    }
  };

  
  const method= url.split('/').pop();

    axios({
        method:'post',
        url,
        data:params, headers:{ authorization:'Bearer '.concat(USERS.token)}
        
      }).then((response) => {
      
        dispatch({
          
          type:succes,
          payload:response.data
        });
        if(method=='login' || method=='register'){
          USERS.token=response.data.token;
           save(response.data.token)
          console.log('users ',USERS.token)

          RootNavigation.replace('Home'); 
        }

        else if (method =='addCharacter' ){
          RootNavigation.pop()
        }
      })  .catch((err) => {
        console.log(err)
     
        dispatch({  type:faild});
      });

}





export const Get = (url,dispatch,start,succes,faild) => {
   
  axios({
    method:'get',
    url,
    headers:{
      authorization: 'Bearer '.concat(USERS.token)
    }
  }).then((response) => {
  
    dispatch({
      
      type:succes,
      payload:response.data
    });
  
  })  .catch((err) => {
    console.log(err);
    dispatch({  type:faild});
  });

}
