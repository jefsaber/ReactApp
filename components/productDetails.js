import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { List } from "react-native-paper";

const ProductDetails = ({ navigation, route }) => {
  // console.warn(route.params.id)
  const { id, category, title, color, price, image, description, sizes } =
    route.params;
  console.log(route.params);
  return (
    <ScrollView style={{ backgroundColor: "#fff",  }}>
      <View style={styles.image}>
        <Image
          source={image}
          style={{
            width: "80%",
            height: 150,
          }}
        />
      </View>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={{ fontSize: 14 }}>{description}</Text>
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Select Sizes</Text>
      </View>
      <View style={styles.sizes}>
        {sizes.map((size, index) => {
          return <List.Item title={size} key={index} style={styles.size} />;
        })}
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Select Color</Text>
      </View>
      <View style={styles.colors}>
        {color.map((item, index) => {
          console.log(item)
          return (
            <View
              key={index}
              style={{
                backgroundColor:  `${item}` ,
                borderRadius: 100,
                width: 50,
                height: 50,
                marginRight: 10,
                marginBottom: 10,
              }}
            ></View>
          );
        })}
      </View>
      <View style={{marginHorizontal:10, marginTop: 20,flexDirection:'row',marginBottom:40,justifyContent:'space-between',borderWidth:0}}>
        <Button
          icon="cart"
          mode="outlined"
          color="#6E9FFF"
          style={styles.ButtonStyle}
          labelStyle={{fontSize:15}}
          onPress={ ()=>console.log('first')}
          uppercase={false}
        > 
          Add To Cart
       </Button>
        <Button mode="contained" color="#6E9FFF" 
          style={styles.ButtonStyle}
          icon="heart"
          onPress={ ()=>console.log('first')}
          labelStyle={{fontSize:15,color:'white'}}
          uppercase={false}

          >
        Add To Favorites
        </Button>
      </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    marginTop: 50,
  },
  description: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sizes: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  size: {
    width: "15%",
    height: 45,
    borderWidth: 0.5,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  colors: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ButtonStyle : {
    width:'48%',
    borderRadius:8,
    // flexDirection:'row-reverse'
  }
});
export default ProductDetails;
