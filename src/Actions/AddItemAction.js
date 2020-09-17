import React from 'react';
import {Post} from './api'
import {BASE_URL,ADD_ITEM_START,ADD_ITEM_SUCCES,ADD_ITEM_FAILD} from './types'
export const AddItemAction = (params) => {
    return (dispatch) => {
                Post(
                  BASE_URL.concat('/api/addCharacter'),
                  params,
                  dispatch,
                  ADD_ITEM_START,
                  ADD_ITEM_SUCCES,
                  ADD_ITEM_FAILD
                )   
    };
  };
  
