
import AsyncStorage from "@react-native-community/async-storage";

import {Post} from './api'
import { Alert } from "react-native";
import { LOADING_START, LOADING_SUCCES, LOADING_FAILD,REGISTER_START,REGISTER_SUCCES,REGISTER_FAILD,BASE_URL} from "./types";

export const Login = (params) => {

    return (dispatch) => {
      dispatch({type:LOADING_START})
      if(params.email != '' &&  params.password!= '' ){
  
       Post(  BASE_URL.concat('/login'),params,dispatch,LOADING_START,LOADING_SUCCES,LOADING_FAILD) 
      }
      else{
         Alert.alert('Boş Alanları Doldurun')
      }
     
    };
  };

export const register = (params) => {

  return (dispatch) => {
    dispatch({type:REGISTER_START})

    if(params.email != '' &&  params.password != ''  && params.firstName != '' &&  params.lastName != '' ){

      Post( BASE_URL.concat('/register'),params,dispatch,REGISTER_START,REGISTER_SUCCES,REGISTER_FAILD) 
    }
    else{
       Alert.alert('Boş Alanları Doldurun')
    }
   
  };
};