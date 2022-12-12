import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState ,useEffect} from "react";
import { Button } from "react-native-paper";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc ,getDoc} from "firebase/firestore";
import MaterialIcons from "@expo/vector-icons/Ionicons";

const Favorites = ({ navigation }) => {
  let AllProducts=[];
  const [loading, setLoading] = useState(false);
  const [tmpUser, setuser] = useState({});
  const getuserinfo = async () => {
    try {
      if (loading == false) {
        console.log(auth.currentUser.uid);

        getDoc(doc(db, "Users", auth.currentUser.uid)).then((docSnap) => {
          if (docSnap.exists) {
            setuser(docSnap.data());
          }
          console.log("hereeeeee2");
          setLoading(true);
        });

        //console.log(username);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getAllProducts = async () => {
    getDocs(collection(db, "Products"))
      .then((docSnap) => {
        docSnap.forEach((doc) => {
          AllProducts.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getuserinfo();
    getAllProducts();
  }, []);

  const data = AllProducts.filter((element) => {
    return tmpUser.Favorites.includes(element.id);
  });
  const [Favorites, setFavorites] = useState(data);
  const RemoveFavorites = async (item) => {
    const docRef = doc(db, "Users",auth.currentUser.uid);
    tmpUser.Favorites.splice(tmpUser.Favorites.indexOf(item.id));
   
    const Favorites = {
      Favorites: tmpUser.Favorites,
    };
    updateDoc(docRef, Favorites)
      .then(() => {
        setFavorites(tmpUser.Favorites);
        console.log("added successfuly");
        alert("Favorites Successfuly changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.RecentText}>Favorites</Text>
      </View>
      {tmpUser.Favorites.length != 0 ? (
        <ScrollView>
          <View>
            <View style={styles.ProductsCont}>
              {Favorites.map((item) => {
                console.log(item);
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
                        onPress={() => RemoveFavorites(item)}
                      >
                        <MaterialIcons name="heart" size={24} />
                      </TouchableOpacity>
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
            Your Favorites List Is Empty
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
  );
};

export default Favorites;

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
