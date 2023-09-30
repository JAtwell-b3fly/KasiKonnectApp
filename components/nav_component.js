import React from "react";
import {View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";

const Nav_component = () => {
    return(
<View style={styles.nav_bar_div}>
            <View style={styles.nav_div}>

                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn}>
                        <Image source={require("../assets/1.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Home</Text>
                </View>
                
                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn}>
                        <Image source={require("../assets/4.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Products</Text>
                </View>
                

                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn}>
                        <Image source={require("../assets/5.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Specials</Text>
                </View>

                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn}>
                        <Image source={require("../assets/3.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Wishlist</Text>
                </View>

                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn}>
                        <Image source={require("../assets/6.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Profile</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    nav_bar_div: {
        height: 100,
        width: "100%",
        backgroundColor: "#324025",
        zIndex: 1,
        position: "absolute",
        top: 767,
    },
    nav_btn_imgs: {
        width: "100%",
        height: "100%",
    },
    nav_btn: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        paddingLeft: 16,
        zIndex: 1,
        position: "absolute",
    },
    nav_div: {
        flexDirection: "row",
    },
    nav_btn_text: {
        color: "white",
        fontSize: 16,
        position: "relative",
        textAlign: "center",
        marginTop: 65
    },
    single_nav_btn_div: {
        flexDirection: "column",
        height: "auto",
        paddingLeft: 10,
        paddingRight: 10,
    },
    });

export default Nav_component;