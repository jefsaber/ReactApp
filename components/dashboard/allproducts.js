import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "../../firebase/firebase";
import { collection, where, query, deleteDoc } from "firebase/firestore";
import { DATA } from "../../assets/Data";
const Allproducts = ({ navigation, route }) => {
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
        title="Recent"
        data={DATA}
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
  },
});
