import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//importing the custom screens
import LoadingScreen from './src/Screens/LoadingScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import HomeScreen from "./src/Screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="index" component={LoadingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
