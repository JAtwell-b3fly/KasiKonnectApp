import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const Header_component = () => {
    return(
        <View style={styles.header}>
            <Image source={require("../assets/logo.png")} resizeMode="contain" style={styles.logo} />
            <Image source={require("../assets/app-name-and-logo.png")} resizeMode="contain" style={styles.slogan} />

            <TouchableOpacity style={styles.cart_btn}>
                <Image source={require("../assets/shopping-cart.png")} style={styles.cart_btn_img} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        height: 140,
        marginTop: 20,
        backgroundColor: "#fbfaf2",
    },
    cart_btn: {
        marginTop: 60,
        marginLeft: 20,
    },
    cart_btn_img: {
       width: 40,
       height: 40, 
    },
    logo: {
        height: "auto",
        width: 150,
    },
    slogan: {
        height: "auto",
        width: 150,
    },
})


export default Header_component;