import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./components/favorites";
import Cart from "./components/cart";
import Homepage from "./components/homepage";
import Search from "./components/search";
import Profile from "./components/Profile";
import Products from "./components/products";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, Text, View, Image ,Dimensions} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from "./components/productDetails";
const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const Stacks= ()=>{
  <Stack.Navigator initialRouteName="Products">
    <Stack.Screen name='Products' component={Products} />
    <Stack.Screen name='ProductDetails' component={ProductDetails} />

  </Stack.Navigator>
}
const width=Dimensions.get("screen").width
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={
       {
        tabBarShowLabel: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: { backgroundColor:'#6E9FFF',height:60},
        tabBarIcon: { color: "white" },
       }
      }
      initialRouteName="Homepage"
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Homepage") {
              iconName = focused ? "home-outline" : "home";
            }
            return <MaterialIcons name={iconName} size={26} color={"white"} />;
          },
          headerShown: false,
        })}
      />
      
        <Tab.Screen
        name="Products"
        component={Stacks}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Products") {
              iconName = focused ? "cart-outline" : "cart";
            }
            return <MaterialIcons  name={iconName} size={26} color={"white"} />;
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
            if (route.name === "Search") {
              iconName = focused ? "search-outline" : "search";
            }
            return <MaterialIcons name={iconName} size={26} color={"white"} />;
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
            if (route.name === "Favorites") {
              iconName = focused ? "heart-outline" : "heart";
            }
            return <MaterialIcons name={iconName} size={26} color={"white"} />;
          },
          headerShown: false,
        })}
      />
        <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Profile") {
                      iconName = focused ? 'menu-outline' : "menu";
                    }
                    return <MaterialIcons name={iconName} size={26} color={"white"} />;
                  },
                  headerShown: false,
                })}
        />
     
    
    </Tab.Navigator>
)
};
const slides = [
  {
    id: 1,
    title: "icon",
    image: require("./assets/logo.png"),
  },
  {
    id: 2,
    title: "Explore",
    image: require("./assets/onboarding1.png"),
  },
  {
    id: 3,
    title: "Order",
    image: require("./assets/onboarding2.png"),
  },
  {
    id: 4,
    title: "Recieve",
    image: require("./assets/onboarding3.png"),
  },
];
export default function App() {
  // const [showhomepage, setShowhomepage] = useState(false);

  // const buttonLabel = (label) => {
  //   return (
  //     <View
  //       style={{
  //         padding: 12,
  //       }}
  //     >
  //       <Text
  //         style={{
  //           color: "#072F4A",
  //           fontWeight: "600",
  //           fontSize: 16,
  //         }}
  //       >
  //         {label}
  //       </Text>
  //     </View>
  //   );
  // };
  // if (!showhomepage) {
  //   return (
  //     <AppIntroSlider
  //       data={slides}
  //       renderItem={({ item }) => {
  //         return (
  //           <View
  //             style={{
  //               flex: 1,
  //               alignItems: "center",
  //               padding: 15,
  //               paddingTop: 100,
  //             }}
  //           >
  //             <Image
  //               source={item.image}
  //               style={{
  //                 width: width - 80,
  //                 height: 400,
  //               }}
  //               resizeMode="contain"
  //             />
  //             <Text
  //               style={{
  //                 fontWeight: "bold",
  //                 color: "#072F4A",
  //                 fontSize: 22,
  //               }}
  //             >
  //               {item.title == "icon" ? "" : item.title}
  //             </Text>
              
  //           </View>
  //         );
  //       }}
  //       activeDotStyle={{
  //         backgroundColor: '#0057FF',
  //         width: 30,
  //       }}
  //       showSkipButton
  //       renderNextButton={() => buttonLabel("Next")}
  //       renderSkipButton={() => buttonLabel("Skip")}
  //       renderDoneButton={() => buttonLabel("Done")}
  //       onDone={() => {
  //         setShowhomepage(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

