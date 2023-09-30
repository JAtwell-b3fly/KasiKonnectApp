import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Description from './pages/Description';
import Transaction from './pages/Transaction';

export default function App() {
  return (
    <View style={styles.container}>
      <Transaction/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
});
