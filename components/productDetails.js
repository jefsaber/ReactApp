import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { List } from "react-native-paper";

const ProductDetails = ({ navigation, route }) => {
  console.warn(route.params.id)
  const { id, category, title, color, price, image, description, sizes } =route.params;
  return (
    <ScrollView>
      <View style={styles.image}>
        <Image
          source={image}
          style={{
            width: "80%",
            height: 150,
          }}
        />
      </View>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={{ fontSize: 14 }}>{description}</Text>
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Select Sizes</Text>
      </View>
      <View style={styles.sizes}>
        {sizes.map((size, index) => {
          return <List.Item title={size} key={index} style={styles.size} />;
        })}
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Select Color</Text>
      </View>
      <View style={styles.colors}>
        {color.map((color, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: { color },
                borderRadius: 100,
                width: 50,
                height: 50,
                marginRight: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: "#CECECE",
              }}
            ></View>
          );
        })}
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Button
          icon="cart"
          mode="contained"
          color="#6E9FFF"
          labelStyle={{ color: "#fff" }}
        >
          Add To Cart
        </Button>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 15, marginBottom: 50 }}>
        <Button mode="contained" color="#6E9FFF" labelStyle={{ color: "#fff" }}>
          Buy Now {price}$
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    marginTop: 50,
  },
  description: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sizes: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  size: {
    width: "15%",
    height: 45,
    borderWidth: 0.5,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  colors: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default ProductDetails;
