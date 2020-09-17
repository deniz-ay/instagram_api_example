import React from 'react';

import { LOADING_START, LOADING_SUCCES, LOADING_FAILD,REGISTER_START,REGISTER_SUCCES,REGISTER_FAILD} from "../Actions/types";

const INITIAL_STATE = {
  loading: false,
   user:null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case LOADING_START:
      console.log('START')
      return {
        ...state,
        loading: true,
      };

    case LOADING_SUCCES:
      console.log('login is succes');
    
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    case LOADING_FAILD:
      console.log('FAILD')
      return {
        ...state,
        loading: false,
      };



      case REGISTER_START:
        console.log('register start')
        return {
          ...state,
          loading: true,
        };
  
      case REGISTER_SUCCES:
        console.log('register succes');
      
        return {
          ...state,
          loading: false,
          user: action.payload
        };
  
      case REGISTER_FAILD:
        console.log('register faild')
        return {
          ...state,
          loading: false,
        };

        
      default:
        return state;
    }
  };
   