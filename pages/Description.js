import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox
} from 'react-native';

export default function Description() {
    return (<View>
        <View style={styles.topContainer} >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Image style={styles.logoName} source={require('../assets/App Name and Logo.png')} />
            <TouchableOpacity>
            <Image style={styles.shopCart} source={require('../assets/shopping-cart.png')} /></TouchableOpacity>
        </View>
        <View style={styles.main}>
            <View style={styles.belowmain} >
                <TouchableOpacity>
                    <Image style={styles.arrow} source={require('../assets/left-arrow 1.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Sasko Bread Variety Pack</Text></View>
            <Image style={styles.breadImg} source={require('../assets/bread 3.png')} />
            <Text style={styles.title}>Sasko Bread Variety Pack</Text>
        </View>
        <View style={styles.container}><Text style={styles.header}>R350</Text>
            <Text style={styles.paragraph}>Samy’s Wholesalers</Text>
            <Text style={styles.header}>Description</Text>
            <Text style={styles.paragraph}>
                Here are freshly baked bread that could <br />feed a family in need.
                Delicious and <br />carefully prepared.</Text>

            <Text style={styles.paragraph}>The variety includes white bread, brown <br />bread,
                low gi bread and white extended <br />bread loaf.</Text></View>

        <View style={styles.barcodeMain}><Text style={styles.paragraph2}>Baked<br />
            Expiry Date<br />
            Barcode</Text>
            <View style={styles.box}>
                <Text>29 September 2023<br />
                    15 October 2023<br />
                    MPTHY1256348</Text>
            </View>
        </View>


        <View style={styles.mainButton}>
            <TouchableOpacity>
            <View style={styles.heartContainer}> <Image style={styles.heartimg} source={require('../assets/heart 2.png')} /></View></TouchableOpacity>
            <TouchableOpacity style={styles.button}> <View style={styles.heartContainer}>
                 <Image style={styles.heartimg} source={require('../assets/add-to-cart.png')} /></View> <Text style={styles.buttonText}>Add To Cart</Text></TouchableOpacity>

        </View>

        
    </View>)
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 118,
        height: 77
    },
    logoName: {
        width: 142,
        height: 61
    },
    shopCart: {
        width: 39,
        height: 39
    },
    main: { backgroundColor: "#FBFAF2", alignContent: 'center', alignItems: 'center' },
    belowmain: { backgroundColor: "#FBFAF2", flexDirection: 'row', marginTop: 10 },
    container: { backgroundColor: "#FBFAF2" },
    heartContainer: {
        height: 38, width: 38,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#E0CCA4'
    },
    bottom:{backgroundColor:'#324025', height: 79, width:300,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center'},
    mainButton: {
        borderWidth: 2, borderColor: '#F6BC5E', width: 341,
        height: 62,
        padding: 12,
        alignItems: 'center',
        marginTop: 20, flexDirection: 'row'
    },
    arrow: { width: 22, height: 15, marginRight: 50, marginLeft: -40 },
    title: { fontSize: 20, color: '#324025' },
    breadImg: {
        width: 342,
        height: 135
    },
    heartimg: {
        width: 26,
        height: 22
    },
    box: { width: 224, height: 72, backgroundColor: '#E0CCA4', alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
    button: {
        backgroundColor: '#324025',
        width: 262,
        height: 43, padding: 12, alignItems: 'center', borderRadius: 50, borderWidth: 2, borderColor: '#F6BC5E', justifyContent: 'center',
        flexDirection:'row'
    },
    heart: {
        width: 142,
        height: 61
    },
    header: { color: '#324025', fontWeight: 'bold', fontSize: 17 },

    paragraph: { color: '#324025', fontSize: 17, marginBottom: 10 },
    paragraph2: { color: '#324025', fontSize: 16, fontWeight: 'bold' },
    barcodeMain: { flexDirection: 'row', justifyContent: 'space-between' },
    buttonText: {
        color: '#FFF',
        fontSize: 24, padding:5
    }

})