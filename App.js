import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from "react-native";
import Welcome from './pages/welcome';
import Login from './pages/login'
import SignUp from './pages/signUp';
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
