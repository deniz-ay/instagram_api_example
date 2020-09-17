import React from 'react';
import {Post} from './api'
import {DELETE_ITEM_START,DELETE_ITEM_SUCCES,DELETE_ITEM_FAILD,BASE_URL} from './types'
export const deleteItem = (params) => {
    return (dispatch) => {
                Post(
                  BASE_URL.concat('/api/removeCharacter'),
                  params,
                  dispatch,
                  DELETE_ITEM_START,
                  DELETE_ITEM_SUCCES,
                  DELETE_ITEM_FAILD

                )   
    };
  };
  
