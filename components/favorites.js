import { StyleSheet, Text, View} from "react-native";
import React from "react";
import Productlist from "./productlist";
import { Button } from "react-native-paper";
import { getUserData } from "./homepage";

//import { data } from "../assets/Data";
import { getAllProducts } from "../App.js";


const Favorites = ({ navigation }) => {
  let AllProducts = getAllProducts();
  const tmpUser = getUserData();

  const data = AllProducts.filter((element) => {
    return tmpUser.Favorites.includes(element.id);
  });
  const iconfunction = () => {


  };
  return (
    <View style={styles.container}>
      <View style={styles.RecentCont}>
        {tmpUser.Favorites.length != 0 ? (
          <Productlist
            icon="heart"
            title="My Favorites"
            navigation={navigation}
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
