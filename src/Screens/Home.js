import React, { useState, useEffect } from 'react';
import { Text, View,FlatList ,StyleSheet, Dimensions,Image, ActivityIndicator} from 'react-native';
import {  connect } from "react-redux";
import {getList,deleteItem} from '../Actions'



const {height,width}=Dimensions.get('window')
const Home = (props) => {


useEffect(()=>{

     props.getList()   
    
    
 },[])
 


  const renderItem = ({ item }) => 

  (

    <View style={styles.item} >
     

  <Image
 defaultSource={require('../img/dummy-image.jpg')}
 source={{uri:item.image}}
 style={{width:'30%',height:'100%',marginHorizontal:5}}
 />
 <View style={{marginHorizontal:5,justifyContent:'space-around'}}>
<Text> {item.name}  </Text>
<Text> {item.gender} </Text>
  <Text> {item.status} </Text>
 </View>
 <Text 
 style={{fontSize:20,marginHorizontal:20}}
 onPress={(()=>{
props.deleteItem(item._id)
 })}
 
 >
   X
 </Text>  
    </View>

  );
  
    return(
    <View>
      {
        props.charactersLoading ? <ActivityIndicator size='large'/> :
        <FlatList
          data={props.characterLists}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2%",
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: 1,
                    backgroundColor: "#f79e04",
                  }}
                ></View>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{ alignItems: "center", paddingTop: "10%", height: 350 }}
              >
                <Text
                  style={{
                    color: "#61DAFB",
                    fontSize: 18,
                    marginBottom: "10%",
                  }}
                >
                  Listeniz Boş !!
                </Text>

              </View>
            );
          }}
        />
      }
     
    </View>
);
}
const styles=StyleSheet.create({
  item: {
    marginLeft: 10,
    borderLeftWidth: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#61DAFB",
    marginBottom: 5,
    height: height * 0.1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
})
const mapStateToProps = ({ listResponse }) => {
    const {characterLists, charactersLoading} = listResponse;
    return {characterLists, charactersLoading};
  };

  
  export default connect(mapStateToProps, {getList,deleteItem})( Home);
