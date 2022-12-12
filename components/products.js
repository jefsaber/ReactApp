import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import Section from "./sections";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";

const Products = ({ navigation }) => {
  const [AllProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    let temp = [];
    getDocs(collection(db, "Products"))
      .then((docSnap) => {
        docSnap.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setAllProducts(temp);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getAllProducts();
    });
  }, [navigation]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
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
          style={{ borderRadius: 12, marginBottom: 30 }}
        />
      </View>
      <Section data={AllProducts} navigation={navigation} SectionTitle="" />
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
export default Products;
