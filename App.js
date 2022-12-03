import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./components/favorites";
import Cart from "./components/cart";
import Homepage from "./components/homepage";
import Search from "./components/search";
import Profile from "./components/Profile";
import AddProduct from './components/dashboard/addprodut'
import MaterialIcons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
  
        //   if (route.name === 'Homepage') {
        //     iconName = focused
        //       ? 'home'
        //       : 'home-outline';
        //   } else if (route.name === 'Favorites') {
        //     iconName = focused ? 'heart' : 'heart-outline';
        //   }
        //   else if (route.name === 'Cart') {
        //     iconName = focused ? 'heart' : 'heart-outline';
        //   }
        //   else if (route.name === 'Favorites') {
        //     iconName = focused ? 'heart' : 'heart-outline';
        //   }
        //   else
        //   iconName='home'
        //   // You can return any component that you like here!
        //   return <MaterialIcons name={iconName} size={24} color={'white'} />;
        // },
        tabBarShowLabel:false,
        // tabBarActiveBackgroundColor:'red',
        tabBarHideOnKeyboard:true,
        tabBarStyle: { backgroundColor:'#6E9FFF',height:60},
        tabBarIcon:{color:'white'},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="Homepage"
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Homepage') {
              iconName = focused
                ? 'home-outline'
                : 'home';
          }
          return <MaterialIcons name={iconName} size={24} color={'white'} />;
        },
        headerShown: false,
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Favorites') {
              iconName = focused
                ? 'heart-outline'
                : 'heart';
          }
          return <MaterialIcons name={iconName} size={24} color={'white'} />;
        },
        headerShown: false,
        })}
 />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Search') {
              iconName = focused
                ? 'search-outline'
                : 'search';
          }
          return <MaterialIcons  name={iconName} size={24} color={'white'} />;
        },
        headerShown: false,
        })}
 />

      <Tab.Screen name="Cart" component={Cart} options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Cart') {
              iconName = focused
                ? 'cart-outline'
                : 'cart';
          }
          return <MaterialIcons   name={iconName} size={24} color={'white'} />;
        },
        headerShown: false,
        })}
/>
      <Tab.Screen name="Profile" component={AddProduct} options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Profile') {
              iconName = focused
                ? 'menu-outline'
                : 'menu';
          }
          return <MaterialIcons  name={iconName} size={24} color={'white'} />;
        },
        headerShown: false,
        })}
 />
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
