import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  where,
  query,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { getAllProducts } from "../../App";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { setAllProducts } from "../../App";

const Allproducts = ({ navigation, route }) => {
  const AllProducts = getAllProducts();
  const [Products, setProducts] = useState(AllProducts);

  const RemoveProduct = async (id) => {
    deleteDoc(doc(db, "Products", id))
      .then(async () => {
        let temp = [];
        getDocs(collection(db, "Products")).then((docSnap) => {
          docSnap.forEach((doc) => {
            temp.push({ ...doc.data(), id: doc.id });
          });
          //console.log(temp);
          setProducts(temp);
          setAllProducts(temp);
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.RecentText}>All Products</Text>
      </View>
      <ScrollView>
        <View>
          <View style={styles.ProductsCont}>
            {Products.map((item) => {
              return (
                <TouchableOpacity
                  delayPressIn={50}
                  key={item.id}
                  activeOpacity={0.4}
                >
                  <View style={styles.ProductCont}>
                    <View style={styles.ProductDetails}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/nike1.png")}
                        style={styles.ProductImage}
                      />
                      <View>
                        <Text style={styles.ProductTitle}>{item.Title}</Text>
                        <Text style={styles.ProductCategory}>
                          {item.Category}
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Text>1pc</Text>
                      </View>
                      <View style={styles.PriceCont}>
                        <Text>${item.Price}</Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      delayPressIn={50}
                      style={styles.CloseButton}
                      hitSlop={{ top: 9, bottom: 9, left: 9, right: 9 }}
                      onPress={() => RemoveProduct(item.id)}
                    >
                      <MaterialIcons name="close" size={24} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
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
  RecentCont: {
    paddingLeft: 20,
    marginBottom: 15,
    paddingTop: 15,
  },
  RecentText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ProductDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "55%",
    height: "100%",
  },
  ProductsCont: {
    marginTop: 10,
  },
  ProductCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "96%",
  },
  ProductImage: {
    width: 90,
    height: 60,
  },
  ProductTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  ProductCategory: {
    fontSize: 12,
  },
  PriceCont: {
    marginLeft: 10,
  },
});
