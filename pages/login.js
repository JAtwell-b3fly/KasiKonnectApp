import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 250, height: 250 }} // You can adjust the width and height as needed
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Text> Don't have an account ?  <Text></Text> <Text>Sign up</Text></Text>
      <TouchableOpacity style={styles.BtnLogin}><Text style={styles.LoginText}>Login</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#F6BC5E",
    paddingLeft: 80,
    borderRadius: 25,
    fontSize: 16,
    color: "#333",
    marginTop: 12,
    fontFamily: "Inter",
  },

  BtnLogin: {
    width: 250,
    height: 40,
    backgroundColor: "#324025",
    borderColor: "#F6BC5E",
    borderRadius: 25,
    marginTop: 10,
    fontFamily: "Inter",
  },

  LoginText: {
    paddingLeft: 90,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    fontFamily: "Inter",
  },
});
export default Login;