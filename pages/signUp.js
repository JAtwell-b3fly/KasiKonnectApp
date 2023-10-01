
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

import { Picker } from "@react-native-picker/picker";

function SignUp() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
   
   const [selectedValue, setSelectedValue] = useState('Shop Owner'); 
   
  
  
   return (
     <View style={styles.container}>
       <View style={styles.centeredContent}>
         <Image
           source={require("../assets/logo.png")}
           style={{ width: 250, height: 250 }} // You can adjust the width and height as needed
         />
         <TextInput
           style={styles.input}
           placeholder="Full Name"
           onChangeText={(text) => setFullName(text)}
           value={fullName}
         />

         <Picker
           style={styles.picker}
           selectedValue={selectedValue}
           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         >
           <Picker.Item label="Shop Owner" value="Shop Owner" />
           <Picker.Item label="Driver" value="Driver" />

         </Picker>
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

         <Text>
           {" "}
           Already Have An Account?
           <Text></Text> <Text>Login</Text>
         </Text>
         <TouchableOpacity style={styles.BtnLogin}>
           <Text style={styles.LoginText}>Sign Up</Text>
         </TouchableOpacity>
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

  picker: {
    width: 250, // Set the width of the Picker
    height: 40, // Set the height of the Picker
    borderWidth: 1,
    borderColor: "#F6BC5E",
    marginTop: 10,
    backgroundColor: "white", // Background color of the Picker
    borderRadius: 25,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    paddingLeft: 70
  },
  BtnLogin: {
    width: 250,
    height: 45,
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
export default SignUp