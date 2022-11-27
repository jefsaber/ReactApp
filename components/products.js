import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const products = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const DATA = [
    {
      id: 1,
      imageUrl: require("../assets/nike1.png"),
      title: "Nike Air Force 1",
      color: ["White", "Black", "Red"],
      price: 100,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 20, marginTop: 85 }}>
        <Text style={{ fontSize: 28 }}>Shop</Text>
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ borderRadius: 12 }}
        />
      </View>
      <View style={styles.products}>
        <ScrollView>
          {DATA.map((item) => {
            return (
              <View style={styles.productList}>
                <Text>{item.title}</Text>
                <Text>{item.color[0]}</Text>
                <Text>${item.price}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  products: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  productList: {
    width: "45%",
    backgroundColor: "#818181",
    height: 200,
  },
});
export default products;
