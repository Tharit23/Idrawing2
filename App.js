import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Menupage from './screens/Menupage';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      
      <Menupage />
    </NavigationContainer>
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
