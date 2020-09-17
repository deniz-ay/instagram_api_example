import * as React from 'react';

export const navigationRef = React.createRef();
import { StackActions } from '@react-navigation/native';

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}



export function replace(...args) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}
export function pop() {
  navigationRef.current?.dispatch(StackActions.pop());
}