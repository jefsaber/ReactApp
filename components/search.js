import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Productlist from "./productlist";
import React from "react";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { data } from "../assets/Data";
import { getAllProducts } from "../App.js";
import { getUserData } from "./homepage";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    data.filter((item) => {
      item;
    });
  };
  let AllProducts = getAllProducts();
  const tmpUser = getUserData();

  const data = AllProducts.filter((element) => {
    return tmpUser.Recent.includes(element.id);
  });
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
        <Productlist
          icon="close"
          title="Recent"
          data={data}
          iconfunction={iconfunction}
        />
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
