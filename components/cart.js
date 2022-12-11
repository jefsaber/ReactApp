import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Productlist from "./productlist";
import { TouchableRipple } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { getAllProducts } from "../App.js";
import { getUserData } from "./homepage";

const Cart = ({ navigation }) => {
  const iconfunction = () => {
    console.log("1");
  };
  let AllProducts = getAllProducts();
  const tmpUser = getUserData();

  const data = AllProducts.filter((element) => {
    return tmpUser.Favorites.includes(element.id);
  });
  return (
    <View style={styles.container}>
      <View style={styles.CartCont}>
        {data.length != 0 ? (
          <Productlist
            icon="close"
            title="Cart"
            data={data}
            navigation={navigation}
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
              Your Cart Is Empty
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
      {data.length != 0 ? (
        <TouchableRipple
          borderless={true}
          style={styles.Button}
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(255, 255, 255, .32)"
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
            <MaterialIcons
              name="chevron-forward"
              size={24}
              color={"white"}
            ></MaterialIcons>
          </View>
        </TouchableRipple>
      ) : (
        ""
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "rgba(0,75,255,0.57)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },
  CartCont: {
    paddingLeft: 20,
    marginBottom: 15,
    paddingTop: 15,

    maxHeight: "80%",
    minHeight: "60%",
  },
});
