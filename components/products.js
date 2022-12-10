import { View, Text, StyleSheet } from "react-native";
import React, { useEffect , useState } from "react";
import { Searchbar } from "react-native-paper";
import Section from "./sections";
import { DATA } from "../assets/Data";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  where,
  query,
  getCountFromServer,
} from "firebase/firestore";

const Products = ({ navigation }) => {

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    console.log(Products);
    // setProducts([]);
    getDocs(collection(db, "Products"))
      .then((docSnap) => {
        docSnap.forEach((doc) => {
          Products.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
      <Section data={Products} navigation={navigation} SectionTitle="" />
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
