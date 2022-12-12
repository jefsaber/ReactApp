import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableRipple } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { query, where } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import {
  doc,
  updateDoc,
  getDocs,
  getDoc,
  collection,
} from "firebase/firestore";
import { getAllProducts } from "../App";

const Cart = ({ navigation, route }) => {
  let AllProducts = getAllProducts();
  let tmpUser = route.params.tmpUser;
  const [data, setdata] = useState([]);
  //const [tmpUser, setuser] = useState({});
  // const getuserinfo = async () => {
  //   try {
  //     if (loading == false) {
  //       getDoc(doc(db, "Users", auth.currentUser.uid)).then((docSnap) => {
  //         if (docSnap.exists) {
  //           setuser(docSnap.data());
  //           const data = AllProducts.filter((element) => {
  //             return tmpUser.Favorites.includes(element.id);
  //           });
  //           setdata(data);
  //         }
  //         console.log(data);
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getuserinfo();
  // }, []);
  //console.log(tmpUser.Cart);
  console.log(AllProducts);
  const datamaker = () => {
    const temp = AllProducts.filter((element) => {
      return tmpUser.Cart.includes(element.id);
    });
    setdata(temp);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      datamaker();
    });
    //1return unsubscribe;
  }, [navigation]);
  const RemoveCart = async (item) => {
    // const [cart, setcart] = useState(data);
    let Cart = data;
    const docRef = doc(db, "Users", auth.currentUser.uid);
    Cart.splice(Cart.indexOf(item.id));
    const cart = {
      Cart: Cart,
    };
    updateDoc(docRef, cart)
      .then(() => {
        setdata(Cart);
        console.log("data1" + data);
        console.log("added successfuly");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkout = async () => {
    setdata([]);
    const cart = {
      Cart: [],
    };
    const docRef = doc(db, "Users", auth.currentUser.uid);

    updateDoc(docRef, cart)
      .then(() => {
        console.log("data1" + data);
        console.log("added successfuly");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.CartCont}>
        <View>
          <Text style={styles.RecentText}>Shopping Cart</Text>
        </View>
        {data.length != 0 ? (
          <ScrollView>
            <View>
              <View style={styles.ProductsCont}>
                {data.map((item) => {
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
                            source={require("../assets/nike1.png")}
                            style={styles.ProductImage}
                          />
                          <View>
                            <Text style={styles.ProductTitle}>
                              {item.Title}
                            </Text>
                            <Text style={styles.ProductCategory}>
                              {item.Category}
                            </Text>
                          </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <View style={styles.PriceCont}>
                            <Text>${item.Price}</Text>
                          </View>
                        </View>
                        {/* <TouchableOpacity
                          delayPressIn={50}
                          style={styles.CloseButton}
                          hitSlop={{ top: 9, bottom: 9, left: 9, right: 9 }}
                          onPress={() => RemoveCart(item)}
                        >
                          <MaterialIcons name="close" size={24} />
                        </TouchableOpacity> */}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
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
          onPress={checkout}
          rippleColor="rgba(255, 255, 255, .32)"
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Check Out</Text>
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
    paddingTop: 50,
    backgroundColor: "#ffffff",
    // paddingHorizontal: 20,
  },
  CartCont: {
    paddingLeft: 20,
    marginBottom: 15,
    paddingTop: 15,

    maxHeight: "80%",
    minHeight: "60%",
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
