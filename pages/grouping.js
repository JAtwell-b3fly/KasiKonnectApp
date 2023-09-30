import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity , TextInput} from "react-native";
import { Picker } from "@react-native-picker/picker";
function Grouping() {

  const [selectedValue, setSelectedValue] = useState("Shop Owner"); 
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Text style={styles.Heading}>Creat a new group</Text>
        <View style={styles.centeredContent}>
          <TextInput style={styles.input} placeholder="Group Name" />

          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Shop Owner" value="Shop Owner" />
            <Picker.Item label="Driver" value="Driver" />
          </Picker>
          <TextInput style={styles.input} placeholder="Owner name" />

          <TextInput style={styles.input} placeholder="Contact number" />

          <TouchableOpacity style={styles.BtnLogin}>
            <Text style={styles.LoginText}>Create a group </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnLogin}>
            <Text style={styles.LoginText}>Join A Group </Text>
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

  Heading:{
fontFamily:"Inter",
fontWeight:"bold",
fontSize: 30
  } ,
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
    paddingLeft: 70,
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
});
export default Grouping