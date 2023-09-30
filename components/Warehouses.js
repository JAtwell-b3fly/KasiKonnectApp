import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Warehouse() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-1.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/App-Name-and-Logo-2.png")}
        />
        <TouchableOpacity>
        <Image
          style={styles.shop}
          source={require("../assets/shopping-cart-1.png")}
        /></TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
          <Image
            style={styles.arrow}
            source={require("../assets/left-arrow-1.png")}
          /></TouchableOpacity>
          <Text style={styles.warehouse}>Warehouse</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.box}>
            <Image
              style={styles.stretch}
              source={require("../assets/bread-1.png")}
            />
            <View style={styles.cbd}>
              <Text>Drinks</Text>
              <Text style={styles.area}>Area: CBD</Text>
              <Text style={styles.description}>
                Sweets, Toiletries, Meat, Drinks
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.stretch}
              source={require("../assets/bread-2.png")}
            />
            <View style={styles.cbd}>
              <Text>Toiletries</Text>
              <Text style={styles.area}>Area: CBD</Text>
              <Text style={styles.description}>
                Sweets, Toiletries, Meat, Drinks
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.stretch}
              source={require("../assets/bread-3.png")}
            />
            <View style={styles.cbd}>
              <Text>Toiletries</Text>
              <Text style={styles.area}>Area: CBD</Text>
              <Text style={styles.description}>
                Sweets, Toiletries, Meat, Drinks
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.stretch}
              source={require("../assets/bread-1.png")}
            />
            <View style={styles.cbd}>
              <Text>Stationery</Text>
              <Text style={styles.area}>Area: CBD</Text>
              <Text style={styles.description}>
                Sweets, Toiletries, Meat, Drinks
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.stretch}
              source={require("../assets/bread-2.png")}
            />
            <View style={styles.cbd}>
              <Text>Food</Text>
              <Text style={styles.area}>Area: CBD</Text>
              <Text style={styles.description}>
                Sweets, Toiletries, Meat, Drinks
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  logo: {
    width: 120
  },
  top: {
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 30
  },
  shop: {
    marginTop: 30,
    marginLeft: 20
  },
  arrow: {
    marginRight: 120
  },
  warehouse: {
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    marginBottom: 40,
    justifyContent: "space-between",
  },
  box: {
    flexDirection: "row",
    marginBottom: 10,
  },
  name: {
    fontFamily: "Inter",
    fontSize: 18,
    fontStyle: "normal",
  },
  area: {
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
  },
  description: {
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
  },
  btn: {
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    width: 91,
    height: 29,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f6bc5e",
  },
  // bottom: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     backgroundColor: '#324025',
  //     width: '100%',
  //     height: 60,
  //     paddingTop: 10,
  //     paddingHorizontal: 2
  // }
});
