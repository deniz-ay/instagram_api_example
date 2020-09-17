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
import { register } from "../Actions/index";

const Register = (props) => {
  const [email, setEmail] = useState("denizayy@test.com");
  const [password, setPassword] = useState("1234");
  const [firstName, setFirstName] = useState("deniz");
  const [lastName, setlastName] = useState("ay");

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
            placeholder={"Phone number,username or e-mail"}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            placeholder={"Password"}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Input
            placeholder={"Phone number,username or e-mail"}
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
          />
          <Input
            placeholder={"Password"}
            value={lastName}
            onChangeText={(value) => setlastName(value)}
          />
          <Button
            onPress={() => {
              let obj = {
                email,
                password,
                firstName,
                lastName,
              };

              props.register(obj);
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
            <View style={styles.line} />
            <Text
              style={{
                borderColor: "gray",
                margin: 20,
                fontWeight: "bold",
                fontSize: 18,
                color: "gray",
              }}
            >
              OR
            </Text>
            <View style={styles.line} />
          </View>
        </View>

        {/* Login with facebook  */}

        <View
          style={[styles.subContainer, { flex: 1.5, flexDirection: "row" }]}
        >
          <Image
            source={require("../img/Facebook_Logo.png")}
            style={styles.facebookLogo}
          ></Image>

          <Text style={[styles.blueText, { fontSize: 18, marginLeft: 15 }]}>
            Login with Facebook
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: "gray",
  },
  blueText: {
    color: "#4495cb",
    fontWeight: "bold",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  İnstagramLogo: {
    width: "70%",
    height: "40%",
  },
  facebookLogo: {
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  inputStyle: {
    width: 300,
    height: 50,
    backgroundColor: "#ededed",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  line: {
    width: "30%",
    height: 0.5,
    backgroundColor: "gray",
  },
});
const mapStateToProps = ({ authResponse }) => {
  const { list } = authResponse;
  return { list };
};

export default connect(mapStateToProps, { register })(Register);
