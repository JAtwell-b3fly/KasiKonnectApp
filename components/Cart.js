import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput} from "react-native";

const Cart = () => {
    return(
        <View>
        <View style={styles.header}>
            <Image source={require("../assets/logo.png")} resizeMode="contain" style={styles.logo} />
            <Image source={require("../assets/app-name-and-logo.png")} resizeMode="contain" style={styles.slogan} />

            <TouchableOpacity style={styles.cart_btn}>
                <Image source={require("../assets/shopping-cart.png")} style={styles.cart_btn_img} />
            </TouchableOpacity>
        </View>

        <View style={styles.title_div}>
            <TouchableOpacity>
                <Image source={require("../assets/black-back.png")} style={styles.back_nav_img}/>
            </TouchableOpacity>
        
            <Text style={styles.warehouse_heading}>Shopping Cart</Text>
        </View>





        <ScrollView style={styles.cartscroll}>
                <View style={styles.cart_item_div}>
                    <Image source={require("../assets/bread.png")} resizeMode="contain" style={styles.warehouse_logo} />
                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.warehouse_name}>Sasko Bread Bulk Variety Pack</Text>
                        <Text style={styles.warehouse_area}>Samy's Wholesalers</Text>
                        <TextInput placeholder="1" style={styles.quantity} placeholderTextColor={"white"} />
                    </View>

                    <View style={styles.warehouse_text_group}>
                        <Text style={styles.price_text}>R 350</Text>

                        <TouchableOpacity style={styles.delete_btn}>
                            <Image source={require("../assets/9.png")} style={styles.delete_btn_img} />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>

                

        </ScrollView>




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
    height: "100%",
    marginLeft: 10,
},
cartscroll: {
    backgroundColor: "#fbfaf2",
    flexDirection: "column",
    height: 540,
},
cart_item_div: {
    height: 130,
    width: "auto",
    marginBottom: 15,
    marginLeft: 15,
    flexDirection: "row",
    backgroundColor: "#fbfaf2",
    borderBottomWidth: 3,
    borderBottomColor: "white",
},
warehouse_name: {
    fontSize: 16,
    width: 150,
    textAlign: "justify",
    fontWeight: "500",
},
warehouse_area: {
    fontSize: 15,
    width: 150,
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
delete_btn: {
    backgroundColor: "#324025",
    marginTop: 30,
    width: 30,
    height: 30,
    marginLeft: 15,
    borderRadius: 10,
},
delete_btn_img: {
    height: 50,
    width: 50,
    backgroundColor: "#324025",
    position: "relative",
    borderRadius: 10,
},
view_btn_text: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
},
price_text: {
    fontSize: 18,
    fontWeight: "800"
},
quantity: {
    textAlign: "center",
    backgroundColor: "#324025",
    borderRadius: 10,
    marginTop: 5,
}
});

export default Cart;