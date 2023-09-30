import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  HomeTuckShop from './components/HomeTuckshop'
import SignUp from './pages/signUp';
import Grouping from './pages/grouping';
export default function App() {
  return (
    <View style={styles.container}>
      <Grouping />
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
