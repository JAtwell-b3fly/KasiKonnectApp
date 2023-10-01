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
    return (<View style={styles.container}>
        <View style={styles.topContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Image style={styles.logoName} source={require('../assets/app-name-and-logo.png')} />
            <TouchableOpacity>
                <Image style={styles.shopCart} source={require('../assets/shopping-cart.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.main}>
        <View style={styles.belowmain} >
            <TouchableOpacity>
                <Image style={styles.arrow} source={require('../assets/left-arrow 1.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Transaction Summary</Text>
        </View></View>
        <View style={styles.table}> <Image style={styles.img} source={require('../assets/samys-logo.png')} />
            <Text>Samy’s<br />Order Number:<br />
                0987543456</Text> <Text>24/09/23 <br />24/09/23</Text></View>

        <View style={styles.table}> <Image style={styles.img} source={require('../assets/samys-logo.png')} />
            <Text>Samy’s<br />Order Number:<br />
                0987543456</Text> <Text>24/09/23 <br />24/09/23</Text></View>

        <View style={styles.table}> <Image style={styles.img} source={require('../assets/samys-logo.png')} />
            <Text>Samy’s<br />Order Number:<br />
                0987543456</Text> <Text>24/09/23 <br />24/09/23</Text></View>

    </View>


    )
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
    main: { backgroundColor: "#FBFAF2", alignContent: 'center', alignItems: 'center', },
    container: { backgroundColor: "#FBFAF2" },
    belowmain: { backgroundColor: "#FBFAF2", flexDirection: 'row', marginTop: 10 },
    arrow: { width: 22, height: 15, marginRight: 50, marginLeft: -40  },
    title: { fontSize: 20, color: '#324025' },
    table: {
        width: 350,
        height: 90, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,
         marginTop: 10, alignItems: 'center',padding:5
    },
    img: {
        width: 91,
        height: 35
    }
})