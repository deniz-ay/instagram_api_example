import React, { Component, useState, useEffect } from "react";
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
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Input, CheckBox } from "../components";

import { connect } from "react-redux";
import { Login } from "../Actions";
import { USER_ID, USERS } from "../Actions/types";
import * as RootNavigation from "../Router/RootNavigation";
YellowBox.ignoreWarnings(["Remote debugger"]);

const LoginPage = (props) => {
  const [email, setEmail] = useState("deniz@test.com");
  const [password, setPassword] = useState("1234");
  const [checkButton, setCheckButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const get = async () => {
    try {
      let token = await AsyncStorage.getItem(USER_ID);
      if (token) {
        USERS.token = token;
        RootNavigation.replace("Home");
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Logo  */}
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
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
              secureTextEntry
              secureTextEntry={checkButton}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                marginBottom: 30,
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <CheckBox
                text={"Hide Password"}
                status={checkButton}
                onPress={() => setCheckButton(!checkButton)}
              />

              <TouchableOpacity>
                <Text
                  style={[styles.blueText, { fontSize: 15, marginLeft: 15 }]}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              onPress={() => {
                let obj = {
                  email,
                  password,
                };

                props.Login(obj);
              }}
              text={"Login"}
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

          {/* Sign Up  */}

          <View
            style={[
              styles.subContainer,
              {
                flex: 0.8,
                borderTopWidth: 0.5,
                borderTopColor: "gray",
              },
            ]}
          >
            <Text
              style={styles.mainText}
              onPress={() => props.navigation.navigate("Register")}
            >
              Don't have an account?{" "}
              <Text style={styles.blueText}> Sign Up.</Text>
            </Text>
          </View>
        </ScrollView>
      )}
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

export default connect(mapStateToProps, { Login })(LoginPage);
