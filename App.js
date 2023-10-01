import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Warehouse from './components/Warehouses';
import Description from './pages/Description';
import Transaction from './pages/Transaction';
import Payment from './pages/Payment';

export default function App() {
  return (
    <View style={styles.container}>
      <Payment/>
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
