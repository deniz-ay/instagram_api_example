import React from 'react';
import {Get} from './api'
import {BASE_URL,LIST_START,LIST_SUCCES,LIST_FAILD} from './types'
export const getList = (params) => {
    return (dispatch) => {
                Get(
                  BASE_URL.concat('/api/characters'),
                  params,
                  dispatch,
                  LIST_START,
                  LIST_SUCCES,
                  LIST_FAILD
                )   
    };
  };
  
