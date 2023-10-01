import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Warehouses = () => {

    const navigation = useNavigation();

    return(
        <View>
        <View style={styles.header}>
            <Image source={require("../assets/logo.png")} resizeMode="contain" style={styles.logo} />
            <Image source={require("../assets/app-name-and-logo.png")} resizeMode="contain" style={styles.slogan} />

            <TouchableOpacity style={styles.cart_btn} onPress={() => navigation.navigate("Cart")}>
                <Image source={require("../assets/shopping-cart.png")} style={styles.cart_btn_img} />
            </TouchableOpacity>
        </View>

        <View style={styles.title_div}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeTuckShop")}>
                <Image source={require("../assets/black-back.png")} style={styles.back_nav_img}/>
            </TouchableOpacity>
        
            <Text style={styles.warehouse_heading}>Warehouses</Text>
        </View>





        <ScrollView style={styles.warehousescroll}>
                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/samys-logo.png")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Samy's Wholesalers</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn} onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/numain-logo.jpeg")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Numain Cash & Carry Warehouse</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/cashcarry.jpeg")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Cash & Carry Wholesalers</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/samys-logo.png")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Samy's Wholesalers</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/numain-logo.jpeg")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Numain Cash & Carry Wholesalers</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/cashcarry.jpeg")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Cash & Carry Warehouse</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.warehouse_div}>
                    <Image source={require("../assets/samys-logo.png")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Samy's Wholesalers</Text>
                        <Text style={styles.warehouse_area}>Area: CBD</Text>
                        <Text style={styles.warehouse_options}>Sweets, Toiletries, Meat, Drinks</Text>
                    </View>

                    <TouchableOpacity style={styles.view_more_btn}  onPress={() => navigation.navigate("GroupingOwners")}>
                        <Text style={styles.view_btn_text}>View More</Text>
                    </TouchableOpacity>
                    
                </View>

        </ScrollView>




        <View style={styles.nav_bar_div}>
            <View style={styles.nav_div}>

                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn} onPress={() => navigation.navigate("HomeTuckshop")}>
                        <Image source={require("../assets/1.png")} style={styles.nav_btn_imgs} />
                    </TouchableOpacity>
                    <Text style={styles.nav_btn_text}>Home</Text>
                </View>
                
                <View style={styles.single_nav_btn_div}>
                    <TouchableOpacity style={styles.nav_btn} onPress={() => navigation.navigate("GroupingOwners")}>
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
warehouse_logo: {
    width: 100,
    height: "auto",
},
warehousescroll: {
    backgroundColor: "#fbfaf2",
    flexDirection: "column",
    height: 540,
},
warehouse_div: {
    height: 130,
    width: "auto",
    marginBottom: 15,
    marginLeft: 15,
    flexDirection: "row",
},
warehouse_name: {
    fontSize: 16,
    width: 140,
    textAlign: "justify",
    fontWeight: "500",
},
warehouse_area: {
    fontSize: 15,
    width: 140,
    textAlign: "justify",
},
warehouse_options: {
    fontSize: 15,
    width: 140,
    textAlign: "justify",
},
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
back_nav_img: {
    width: 50,
    height: 50,
    marginLeft: 30
},
title_div: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
},
warehouse_heading: {
    fontSize: 20,
    padding: 10,
    marginLeft: 50,
    textAlign: "center",
    fontWeight: "500",
},
warehouse_text_group: {
    flexDirection: "column",
    padding: 15,
},
view_more_btn: {
    backgroundColor: "#f6bc5e",
    width: 120,
    height: 50,
    padding: 13,
    marginTop: 40,
    marginRight: 10,
},
view_btn_text: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
},
});

export default Warehouses;
