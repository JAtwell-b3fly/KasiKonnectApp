import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput} from "react-native";

const HomeTuckShop = () => {
    return(
        <View>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} resizeMode="contain" style={styles.logo} />
                <Image source={require("../assets/app-name-and-logo.png")} resizeMode="contain" style={styles.slogan} />

                <TouchableOpacity style={styles.cart_btn}>
                    <Image source={require("../assets/shopping-cart.png")} style={styles.cart_btn_img} />
                </TouchableOpacity>
            </View>

            <View style={styles.search_bar_div}>
                <TextInput placeholder="Search..." style={styles.search_bar} />
            </View>

            <View style={styles.warehousescroll}>
                <View style={styles.featured_div}>
                <Text style={styles.featured_warehouses}>Featured Warehouses</Text>
                <TouchableOpacity style={styles.explore_btn}><Text style={styles.explore_all}>Explore All</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal>
                    <View style={styles.warehouse_div}>
                        <Image source={require("../assets/samys-logo.png")} resizeMode="contain" style={styles.warehouse_logo} />
                        <Text style={styles.warehouse_name}>Samy's Wholesalers</Text>
                    </View>

                    <View style={styles.warehouse_div}>
                        <Image source={require("../assets/numain-logo.jpeg")}  resizeMode="contain" style={styles.warehouse_logo} />
                        <Text style={styles.warehouse_name}>Numain Cash & Carry Wholesalers</Text>
                    </View>

                    <View style={styles.warehouse_div}>
                        <Image source={require("../assets/cashcarry.jpeg")}  resizeMode="contain" style={styles.warehouse_logo} />
                        <Text style={styles.warehouse_name}>Cash & Carry Wholesalers</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.warehousescroll2}>
                <View style={styles.featured_div}>
                    <Text style={styles.featured_warehouses2}>Top Sale Products</Text>
                    <TouchableOpacity style={styles.explore_btn}><Text style={styles.explore_all}>Explore All</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal>
                    <View style={styles.product_div}>
                        <Image source={require("../assets/fizzers.jpg")} resizeMode="contain" style={styles.product_img} />
                        <Text style={styles.warehouse_name}>Fizzer Sweets Variety Pack</Text>
                    </View>

                    <View style={styles.product_div}>
                        <Image source={require("../assets/fizzers.jpg")} resizeMode="contain" style={styles.product_img} />
                        <Text style={styles.warehouse_name}>Eggs Variety Size Trays</Text>
                    </View>

                    <View style={styles.product_div}>
                        <Image source={require("../assets/Go-Slos.jpeg")} resizeMode="contain" style={styles.product_img} />
                        <Text style={styles.warehouse_name}>Go Slos Variety Packs</Text>
                    </View>
                </ScrollView>
            </View>

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
    search_bar: {
        fontSize: 18,
        padding: 10,
    },
    search_bar_div: {
        marginTop: 10,
        marginLeft: 10,
    },
    warehouse_logo: {
        width: 100,
        height: 50,
    },
    product_img: {
        width: 100,
        height: 100,
    },
    warehousescroll: {
        backgroundColor: "#fbfaf2",
    },
    warehousescroll2: {
        backgroundColor: "#fbfaf2",
        marginTop: 50,
    },
    featured_div: {
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    featured_warehouses: {
        color: "#a17b4a",
        fontSize: 20,
        fontWeight: "500",
        marginRight: 60,
    },
    featured_warehouses2: {
        color: "#a17b4a",
        fontSize: 20,
        fontWeight: "500",
        marginRight: 100,
    },
    explore_btn: {
        backgroundColor: "#c7d0c7",
        padding: 10,
        borderRadius: 10,
    },
    explore_all: {
        fontSize: 15,
        fontWeight: "400",
    },
    warehouse_div: {
        height: 130,
        width: "auto",
        marginBottom: 10,
        marginLeft: 15,
    },
    product_div: {
        height: 200,
        width: "auto",
        marginBottom: 10,
        marginLeft: 15,
    },
    warehouse_name: {
        fontSize: 15,
        width: 100,
        textAlign: "center",
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
    }
});

export default HomeTuckShop;