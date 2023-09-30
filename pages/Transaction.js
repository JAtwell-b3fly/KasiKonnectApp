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

export default function Transaction() {
    return (<View>
        <View style={styles.topContainer} >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Image style={styles.logoName} source={require('../assets/app-name-and-logo.png')} />
            <TouchableOpacity>
                <Image style={styles.shopCart} source={require('../assets/shopping-cart.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.main}>

            <TouchableOpacity>
                <Image style={styles.arrow} source={require('../assets/left-arrow 1.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Transaction Summary</Text></View>


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
    arrow: { width: 22, height: 15, marginRight: 50, marginLeft: -40 },
    title: { fontSize: 20, color: '#324025' },
})