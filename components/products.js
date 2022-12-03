import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const products = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFavorite, setisFavorite] = useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const DATA = [
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
      color: ["Midnight Red", "White", "Black"],
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
      color: ["Midnight Red", "White", "Black"],
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
      color: ["Midnight Red", "White", "Black"],
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
  // const handlefavorite = () => {
  //   setisFavorite(!isFavorite);
  // };

  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 20 }}>
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

      <ScrollView style={styles.products}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {DATA.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate("ProductDetails", {
                    id: item.id,
                    category: item.category,
                    title: item.title,
                    color: item.color,
                    price: item.price,
                    image: item.imageUrl,
                    description: item.description,
                    sizes: item.sizes,
                  });
                }}
                style={styles.productList}
              >
                <TouchableOpacity
                  style={{
                    justifyContent: "flex-end",
                    alignContent: "flex-end",
                    flexDirection: "row",
                  }}
                  //onPress={handlefavorite(item.id)}
                >
                  <Icon
                    name={isFavorite ? "favorite" : "favorite-outline"}
                    color="red"
                    size={25}
                    style={{
                      padding: 5,
                    }}
                  />
                </TouchableOpacity>

                <Image source={item.imageUrl} />
                <Text
                  style={{
                    color: "#383838",
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 30,
                    marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, marginLeft: 10 }}>
                  {item.category}
                </Text>

                <Text
                  style={{ color: "#FFD600", fontSize: 14, marginLeft: 10 }}
                >
                  ${item.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

    backgroundColor: "#fff",
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
    backgroundColor: "#EFEFEF",
    height: 195,
    borderRadius: 12,
    marginBottom: 20,
  },
});
export default products;
