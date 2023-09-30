import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
function Welcome() {
  return (
    <View>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 200, height: 200 }} // You can adjust the width and height as needed
      />

      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.BtnShopOwner}>
          <Text style={styles.TextShopOwner}>Shop Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnDeliveryOwner}>
          <Text style={styles.TextShopOwner}>Delivery Driver</Text>
        </TouchableOpacity>

       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
