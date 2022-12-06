import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Productlist from "./productlist";
import { Button } from "react-native-paper";

//import { data } from "../assets/Data";

const data = [
  {
    id: 1,
    imageUrl: require("../assets/nike1.png"),
    category: "Nike Air Force 1",
    title: "Midnight Red",
    color: ["red", "green", "black"],
    price: 100,
    description:
      "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    sizes: [32, 34, 36, 38, 40, 42, 44, 46],
  },
  {
    id: 2,
    imageUrl: require("../assets/nike1.png"),
    category: "Nike Air Force 1",
    title: "Midnight Red",
    color: ["red", "green", "black"],
    price: 100,
    description:
      "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    sizes: [32, 34, 36, 38, 40],
  },
  {
    id: 3,
    imageUrl: require("../assets/nike1.png"),
    category: "Nike Air Force 1",
    title: "Midnight Red",
    color: ["red", "green", "black"],
    price: 100,
    description:
      "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    sizes: [32, 34, 36, 38, 40],
  },
  {
    id: 4,
    imageUrl: require("../assets/nike1.png"),
    category: "Nike Air Force 1",
    title: "Midnight Red",
    color: ["red", "green", "black"],
    price: 100,
    description:
      "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    //   sizes: [
    //     { id: 1, size: 30 },
    //     { id: 2, size: 32 },
    //     { id: 3, size: 34 },
    //     { id: 4, size: 36 },
    //   ],
    sizes: [32, 34, 36, 38, 40],
  },
];
const Favorites = ({ navigation }) => {
  const iconfunction = () => {
    console.log("1");
  };
  return (
    <View style={styles.container}>
      <View style={styles.RecentCont}>
        {data.length != 0 ? (
          <Productlist
            icon="heart"
            title="My Favorites"
            data={data}
            iconfunction={iconfunction}
          />
        ) : (
          <View
            style={{
              height: "100%",
            }}
          >
            <Text
              style={{
                marginTop: "50%",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 20,
              }}
            >
              Your Favorites List Is Empty
            </Text>
            <Button
              style={{
                backgroundColor: "#6E9FFF",
                marginRight: 20,
                marginLeft: 20,
                padding: 6,
              }}
              labelStyle={{ fontWeight: "bold" }}
              mode="contained"
              title="Go to Shop"
              onPress={() => navigation.navigate("Shop")}
            >
              go to shop
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  RecentCont: {
    marginHorizontal: 20,
    marginBottom: 15,
    paddingTop: 15,
  },
});
