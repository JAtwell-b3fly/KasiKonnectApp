import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Welcome() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.centeredContent}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 200, height: 200 }} // You can adjust the width and height as needed
      />

      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.BtnShopOwner} onPress={navigation.navigate("Login")}>
          <Text style={styles.TextShopOwner}>Shop Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnDeliveryOwner}onPress={navigation.navigate("Login")} >
          <Text style={styles.TextShopOwner}>Delivery Driver</Text>
        </TouchableOpacity>

       
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  centeredContent: {
    alignItems: "center",
  },

  BtnContainer: {
    marginTop: 40,
  },

  BtnShopOwner: {
    backgroundColor: "#324025",
    width: "250px",
    height: 40,
    borderRadius: 30,
  },

  BtnDeliveryOwner: {
    backgroundColor: "#F6BC5E",
    width: "250px",
    height: 40,
    borderRadius: 30,
    marginTop: 5
  },

  TextShopOwner: {
    paddingLeft: 80,
    paddingTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export default Welcome;
