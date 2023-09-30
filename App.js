import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  HomeTuckShop from './components/HomeTuckshop'
export default function App() {
  return (
    <View style={styles.container}>
     <HomeTuckShop/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
