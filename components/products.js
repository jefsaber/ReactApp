import {
  View,
  StyleSheet,
  ScrollView ,TouchableOpacity,Image,Text
} from "react-native";
// import Homepage from "./homepage";
import React from "react";
import { Searchbar } from "react-native-paper";
import Section from './sections'
const Products = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const data = [
    {
      id: 1,
      imageUrl: require("../assets/nike1.png"),
      category: "Nike Air Force 1",
      title: "Midnight Red",
      color: ["red", "green", "black"],
      price: 100,
      description:
        "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
      sizes: [32, 34, 36, 38, 40, 42, 44, 46],
    },
    {
      id: 2,
      imageUrl: require("../assets/nike1.png"),
      category: "Nike Air Force 1",
      title: "Midnight Red",
      color: ["Midnight Red", "White", "Black"],
      price: 100,
      description:
        "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
      sizes: [32, 34, 36, 38, 40],
    },
    {
      id: 3,
      imageUrl: require("../assets/nike1.png"),
      category: "Nike Air Force 1",
      title: "Midnight Red",
      color: ["Midnight Red", "White", "Black"],
      price: 100,
      description:
        "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
      sizes: [32, 34, 36, 38, 40],
    },
    {
      id: 4,
      imageUrl: require("../assets/nike1.png"),
      category: "Nike Air Force 1",
      title: "Midnight Red",
      color: ["Midnight Red", "White", "Black"],
      price: 100,
      description:
        "lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
      //   sizes: [
      //     { id: 1, size: 30 },
      //     { id: 2, size: 32 },
      //     { id: 3, size: 34 },
      //     { id: 4, size: 36 },
      //   ],
      sizes: [32, 34, 36, 38, 40],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ borderRadius: 12 }}
        />
      </View>
      {/* <Section navigation={navigation} data={DATA}  SectionTitle={''} /> */}
      <ScrollView style={styles.ProductsScrollCont}>
   <View style={styles.SectionCont}>
      <Text style={styles.SectionTitle}>
        {data.title}
      </Text>
      {/* <TouchableOpacity delayPressIn={30}  >
      <MaterialIcons size={45} name='chevron-forward-circle'></MaterialIcons>
      </TouchableOpacity> */}
    </View>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            
          }}
        >
          {data.map((item) => {
            return (
              <TouchableOpacity delayPressIn={50}
                key={item.id}
                style={styles.Product}
                onPress={() => {
                  // navigation.navigate("ProductDetails", {
                    // id: item.id,
                    // category: item.category,
                    // title: item.title,
                    // color: item.color,
                    // price: item.price,
                    // image: item.imageUrl,
                    // description: item.description,
                    // sizes: item.sizes,
                  // })
                  navigation.navigate('ProductDetails',
                  {
                    screen:'Homepage',
                    params: {
                      id: item.id,
                      category: item.category,
                      title: item.title,
                      color: item.color,
                      price: item.price,
                      image: item.imageUrl,
                      description: item.description,
                      sizes: item.sizes,
                    },
                  }
                  )
              }
                }
                >
                <Image source={item.imageUrl} />
                <Text
                  style={{
                    color: "#383838",
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 30,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12 }}>
                  {item.category}
                </Text>
  
                <Text
                  style={{ color: "#FFD600", fontSize: 14}}
                >
                  ${item.price}
                </Text>
              </TouchableOpacity>
            );
          })}
         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
 

});
export default Products;
