import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity 
    
    onPress= {props.onPress}
     style={{
      width:'80%',
      height:'17%',
      backgroundColor:'#4495cb',
      alignItems:'center',
       justifyContent:'center',
       borderRadius:10
      }}>
      <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}> {props.text}  </Text>
    </TouchableOpacity> 
);

export {Button};
