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

export default function Payment() {
    return (<View>
    
    <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Image style={styles.logoName} source={require('../assets/app-name-and-logo.png')} />
        <TouchableOpacity>
            <Image style={styles.shopCart} source={require('../assets/shopping-cart.png')} /></TouchableOpacity>
            </View>
        <View style={styles.main}>
            <View style={styles.belowmain} >
                <TouchableOpacity>
                    <Image style={styles.arrow} source={require('../assets/left-arrow 1.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Payment Summary</Text></View>
        </View>
        <View style={styles.table}>
            <Text style={styles.paragrah} >To</Text> <Text>32 Hulana <br />
                Galeshewe<br />
                Kimberley,<br />
                8345</Text></View>

        <View style={styles.table}>
            <Text style={styles.paragrah} >Payment</Text>
            <View>
                <View style={styles.payMethod}>
                    <Text>Card no.  xxx-8235</Text>
                    <Image
                        style={styles.polygon} source={require('../assets/Polygon 1.png')} /> </View>
                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity><Text style={styles.button1}>Add Card</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.button2}>Remove</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

        <View style={styles.table}>
            <Text style={styles.paragrah} >Cost</Text>
            <Text>Service Fee <br />
                Discount<br />
                Total</Text>
            <Text>R8000 <br />
                R8000<br />

                R8000</Text></View>
    
    
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FBFAF2"
    },
    main: { backgroundColor: "#FBFAF2", alignContent: 'center', alignItems: 'center' },
    belowmain: { backgroundColor: "#FBFAF2", flexDirection: 'row', marginTop: 10, marginBottom: 20 },
    arrow: { width: 22, height: 15, marginRight: 50, marginLeft: -40 },
    table: {
        width: 300,
        height: 100, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10,
        marginTop: 10, alignItems: 'center', padding: 5
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
    img: {
        width: 91,
        height: 35
    },

    payMethod: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#F6BC5E', width: 193,
        height: 36,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#FBFAF2', margin: 5, marginBottom: 20
    },

    paragrah: { fontSize: 16, fontWeight: 'bold' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    button1: {
        width: 91,
        height: 29, backgroundColor: '#F6BC5E', justifyContent: 'center', alignItems: 'center', alignContent: 'center'
        , margin: 5
    },
    button2: {
        width: 91,
        height: 29, backgroundColor: '#ACB4A5', margin: 5
    }

})