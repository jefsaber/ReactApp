import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./components/favorites";
import Cart from "./components/cart";
import Homepage from "./components/homepage";
import Search from "./components/search";
import Profile from "./components/Profile";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, Text, View, Image ,Dimensions} from "react-native";
const Tab = createBottomTabNavigator();

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
        name="Cart"
        component={Cart}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Cart") {
              iconName = focused ? "cart-outline" : "cart";
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("./assets/logo.png"),
  },
  {
    id: 2,
    title: "Explore",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("./assets/onboarding1.png"),
  },
  {
    id: 3,
    title: "Order",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("./assets/onboarding2.png"),
  },
  {
    id: 4,
    title: "Recieve",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("./assets/onboarding3.png"),
  },
];
export default function App() {
  const [showhomepage, setShowhomepage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: "#072F4A",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };
  if (!showhomepage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 100,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#072F4A",
                  fontSize: 22,
                }}
              >
                {item.title == "icon" ? "" : item.title}
              </Text>
              
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: '#0057FF',
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowhomepage(true);
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

