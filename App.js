import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from './components/Navbar'
import Products from './components/products'
import ProductDetails from './components/productDetails'
import Homepage from "./components/homepage";
import Search from "./components/search";
import Favorites from "./components/favorites";
import Cart from "./components/cart";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen  name="Homepage" component={Cart}  />
          <Stack.Screen name="Details" component={ProductDetails} />
          
        </Stack.Navigator>
      </NavigationContainer>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    


  },
});
