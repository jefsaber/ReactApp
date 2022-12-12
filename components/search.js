import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,ScrollView
} from "react-native";
import React, { useState ,useEffect} from "react";
import { Button } from "react-native-paper";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc ,getDoc,getDocs} from "firebase/firestore";
import MaterialIcons from "@expo/vector-icons/Ionicons";

const Search = () => {

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
  
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    data.filter((item) => {
      item;
    });
  };


  const data = AllProducts.filter((element) => {
    return tmpUser.Recent.includes(element.id);
  });
  const RemoveRecent =()=>{
    const docRef = doc(db, "Users",auth.currentUser.uid);
   tmpUser.Recent.splice(tmpUser.Recent.indexof(item.id)) 
   const Recent = {
    Recent:tmpUser.Recent
   }
   updateDoc(docRef, Recent)
   .then(() => {
     console.log("added successfuly");
   })
   .catch((err) => {
     console.log(err);
   });
  }
  const iconfunction = () => {
    console.log("1");
  };
  return (
    <View style={styles.container}>
      <View style={styles.SearchCont}>
        <View style={styles.SearchButton}>
          <MaterialIcons name={"arrow-back"} size={28} color="black" />
        </View>
        <View style={styles.SearchInputCont}>
          <TextInput
            cursorColor={"rgba(0,0,0,1)"}
            value={searchQuery}
            onChangeText={onChangeSearch}
            style={styles.SearchInput}
            placeholder="Search"
            placeholderTextColor={"rgba(0,0,0,0.6)"}
          ></TextInput>

          <TouchableOpacity
            onPress={() => {
              setSearchQuery("");
            }}
          >
            {searchQuery && (
              <MaterialIcons name={"close"} size={26} color={"black"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        onTouchStart={() => {
          Keyboard.dismiss();
        }}
        style={{ marginHorizontal: 20, marginTop: 20 }}>
       <ScrollView>
          <View>
            <View style={styles.ProductsCont}>
              {data.map((item) => {
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
                        onPress={() => RemoveRecent(item)}
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
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  SearchCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  SearchButton: {
    width: "15%",
    alignItems: "center",
  },
  SearchInputCont: {
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  SearchInput: {
    paddingLeft: 10,
    width: "80%",
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
});
