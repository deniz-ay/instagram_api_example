import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  YellowBox,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Input, CheckBox } from "../components";
import { connect } from "react-redux";
import { AddItemAction } from "../Actions/index";

const AddItem = (props) => {
  const [name, setName] = useState("denizayy@test.com");
  const [gender, setGender] = useState("1234");
  const [status, setStatus] = useState("deniz");
  const [species, setSpecies] = useState("ay");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Logo  */}
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={[styles.subContainer, { flex: 2 }]}>
          <Image
            source={require("../img/Instagram_Logo.png")}
            style={styles.İnstagramLogo}
          ></Image>
        </View>

        {/* input Form  */}

        <View style={[styles.subContainer, { flex: 3 }]}>
          <Input
            placeholder={"name"}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Input
            placeholder={"status"}
            value={status}
            onChangeText={(value) => setStatus(value)}
          />
          <Input
            placeholder={"gender"}
            value={gender}
            onChangeText={(value) => setGender(value)}
          />
          <Input
            placeholder={"species"}
            value={species}
            onChangeText={(value) => setSpecies(value)}
          />
          <Button
            onPress={() => {
              let obj = {
               name,
               status,
               gender,
               species,
               image:"https://vignette.wikia.nocookie.net/rickandmorty/images/8/8d/Reverse_Giraffe_Entire_Body.png/revision/latest/top-crop/width/360/height/360?cb=20170131022017",
               type:''
              };

              props.AddItemAction(obj);
            }}
            text={"SignUp"}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
          
          
          </View>
        </View>

        {/* Login with facebook  */}


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  subContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  İnstagramLogo: {
    width: "70%",
    height: "29%",
  },


});
const mapStateToProps = ({ authResponse }) => {
  const { list } = authResponse;
  return { list };
};

export default connect(mapStateToProps, { AddItemAction })(AddItem);
