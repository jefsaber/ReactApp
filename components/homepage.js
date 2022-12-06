import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { DATA, data } from "../assets/Data.js";
import AppIntroSlider from "react-native-app-intro-slider";
const { width: screenWidth } = Dimensions.get("window");
import Section from "./sections";

const slides = [
  {
    id: 1,
    title: "icon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("../assets/nike.jpg"),
  },
  {
    id: 2,
    title: "Explore",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("../assets/Carouselimage.png"),
  },
  {
    id: 3,
    title: "Order",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("../assets/nike.jpg"),
  },
  {
    id: 4,
    title: "Recieve",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    image: require("../assets/nike.jpg"),
  },
];
export let loggedinUser = [];
function setUserData(data) {
  loggedinUser = data;
}

function getUserData() {
  return loggedinUser;
}

export { setUserData, getUserData };

const Homepage = ({ route, navigation }) => {
  const { user_data } = route.params;
  console.log(user_data);
  setUserData(user_data);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontSize: 28, lineHeight: 50, fontWeight: "bold" }}>
            New collection {"\n"}Fall 2022
          </Text>
        </View>

        <View style={styles.CarouselCont}>
          <AppIntroSlider
            data={slides}
            // style={styles.CarouselCont}

            activeDotStyle={{
              backgroundColor: "white",
              width: 30,
            }}
            dotStyle={{
              backgroundColor: "#D9D9D9",
            }}
            showDoneButton={false}
            showNextButton={false}
            bottomButton={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.CarouselImageCont}>
                  <Image source={item.image} resizeMode="cover"></Image>
                </View>
              );
            }}
          />
        </View>
        <Section data={DATA} SectionTitle={"On Sale"} navigation={navigation} />
        <Section data={data} SectionTitle={"On air"} navigation={navigation} />
        <Section data={data} SectionTitle={"On air"} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  SectionCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 50 : 30,
    backgroundColor: "#ffffff",
  },
  ProductsScrollCont: {
    marginBottom: 0,
    marginHorizontal: 20,
  },
  Product: {
    width: "45%",
    backgroundColor: "#EFEFEF",
    height: 190,
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: "space-evenly",
    paddingLeft: 7,
  },
  CarouselImageCont: {
    // height:screenWidth*1.2,
    // width:screenWidth,
  },
  CarouselCont: {
    height: screenWidth * 1.2,
    width: screenWidth,
    marginBottom: 30,
  },
});

export default Homepage;
