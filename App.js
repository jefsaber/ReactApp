import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./components/favorites";
import Cart from "./components/cart";
import Homepage from "./components/homepage";
import Search from "./components/search";
import AddProduct from './components/dashboard/addprodut'
import MaterialIcons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveBackgroundColor:'red',
        tabBarHideOnKeyboard:true,
        tabBarStyle: { backgroundColor:'#6E9FFF'},
        tabBarActiveTintColor:'red',
        tabBarIconStyle:{color:'white'},
        
      }}
      initialRouteName="Homepage"
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="home"  size={24} />
          ),

        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="heart"  size={24} />
          ),

        }} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <MaterialIcons name="search"  size={24} />
          ),

        }} />

      <Tab.Screen name="Cart" component={Cart} options={{
        headerShown: false,

        tabBarIcon: () => (
          <MaterialIcons name="cart"  size={24} />
        ),

      }} />
      <Tab.Screen name="AddProduct" component={AddProduct} options={{
        headerShown: false,
        // tabBarButton: () => <NavblockContent icon="home" />,
        tabBarIcon: () => (
          <MaterialIcons name="cart"  size={24} />
        ),

      }} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
