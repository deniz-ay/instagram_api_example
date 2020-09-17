import React from 'react';

import { LIST_START,LIST_SUCCES,LIST_FAILD,ADD_ITEM_FAILD,ADD_ITEM_SUCCES,ADD_ITEM_START, DELETE_ITEM_START, DELETE_ITEM_SUCCES, DELETE_ITEM_FAILD} from "../Actions/types";

const INITIAL_STATE = {
  charactersLoading: true,
characterLists:[]
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case LIST_START:
      console.log('list')
      return {
        ...state,
        charactersLoading: true,
      };

    case LIST_SUCCES:
      console.log('list_succes');
    
      return {
        ...state,
        charactersLoading: false,
        characterLists:action.payload.characters
      };

    case LIST_FAILD :
      console.log('list_faild')
      return {
        ...state,
        charactersLoading: false,
      };


      case ADD_ITEM_START:
        console.log('add_item_start')
        return {
          ...state,
          loading: true,
        };
  
      case ADD_ITEM_SUCCES:
        console.log('add item succes');
        const newItem=action.payload.newCharacter
      
        return {
          ...state,
          loading: false,
          characterLists:[... state.characterLists,newItem]
        };
  
      case ADD_ITEM_FAILD:
        console.log('add item faild')
        return {
          ...state,
          loading: false,
        };
  
        case DELETE_ITEM_START:
          console.log('delete_item_start')
          return {
            ...state,
            loading: true,
          };
    
        case DELETE_ITEM_SUCCES:
         console.log('delete item succes');
          // const newItem=action.payload.newCharacter
        
          return {
            ...state,
            loading: false,
            characterLists:[... state.characterLists,newItem]
          };
    
        case DELETE_ITEM_FAILD:
          console.log('delete item faild')
          return {
            ...state,
            loading: false,
          };
    
        
      default:
        return state;
    }
  };
   