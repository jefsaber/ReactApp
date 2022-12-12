import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc, getDoc, getDocs } from "firebase/firestore";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { getAllProducts } from "../App";
import { DATA } from "../assets/Data";

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
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
        style={{ marginHorizontal: 20, marginTop: 20 }}
      >
        <View style={styles.RecentCont}>
          <Text style={styles.RecentText}>Featured</Text>
        </View>
        <ScrollView>
          <View>
            <View style={styles.ProductsCont}>
              {DATA.map((item, index) => {
                // console.log(item);
                return (
                  <TouchableOpacity
                    delayPressIn={50}
                    key={index}
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
                          <Text style={styles.ProductTitle}>{item.title}</Text>
                          <Text style={styles.ProductCategory}>
                            {item.category}
                          </Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Text>1pc</Text>
                        </View>
                        <View style={styles.PriceCont}>
                          <Text>${item.price}</Text>
                        </View>
                      </View>
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
