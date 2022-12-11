import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "../../firebase/firebase";
import { collection, where, query, deleteDoc } from "firebase/firestore";
import { DATA } from "../../assets/Data";
import { getAllProducts } from "../../App";
import Productlist from "../productlist";

const Allproducts = ({ navigation, route }) => {
  const AllProducts = getAllProducts();
  //console.log(AllProducts);
  //const AllProducts = route.params.AllProducts;
  const RemoveProduct = (item) => {
    const userRef = collection(db, "Products");
    deleteDoc(doc(db, "Products", item.id))
      .then(() => {})
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <View style={styles.container}>
      <Productlist
        icon="close"
        title="All Products"
        data={AllProducts}
        iconfunction={RemoveProduct}
      />
    </View>
  );
};

export default Allproducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
});
