import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState,useEffect } from "react";
import { Button } from "react-native-paper";
import { List } from "react-native-paper";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
const ProductDetails = ({ navigation, route }) => {
  const { title, color, price, image, description, sizes, id,tmpUser } = route.params;
  const [isFav,setisFav]=useState(tmpUser.Favorites.includes(id));
  const [isCart,setisCart]=useState(tmpUser.Cart.includes(id));
      const AddtoCart = () => {
          tmpUser.Cart.push(id)
          const Cart={
            Cart:tmpUser.Cart
          }
          updateDoc(doc(db, "Users", auth.currentUser.uid),Cart)
          .then(()=>{
            setisCart(!isCart)
            console.log("added successfuly");
            alert("Cart Successfuly changed");
          })
          .catch((err) => {
            console.log(err);
          });

        }
      const RemoveCart = () => {
        tmpUser.Cart.splice(tmpUser.Cart.indexOf(id),1)
        const Cart={
          Cart:tmpUser.Cart
        }
        updateDoc(doc(db, "Users", auth.currentUser.uid),Cart)
        .then(()=>{
          setisCart(!isCart)

          console.log("Remove successfuly");
          alert("Cart Successfuly Remove");
        })
        .catch((err) => {
          console.log(err);
        });

      }
      const AddtoFav =()=>{
        tmpUser.Favorites.push(id)
        const Fav={
          Favorites:tmpUser.Favorites
        }
        updateDoc(doc(db, "Users", auth.currentUser.uid),Fav)
        .then(()=>{
          setisFav(!isFav)
          console.log("added successfuly");
          alert("Favorites Successfuly changed");
        })
        .catch((err) => {
          console.log(err);
        });
      }
      const RemoveFav =()=>{
        tmpUser.Favorites.splice(tmpUser.Favorites.indexOf(id),1)
        const Favorites={
          Favorites:tmpUser.Favorites
        }
        updateDoc(doc(db, "Users", auth.currentUser.uid),Favorites)
        .then(()=>{
          setisFav(!isFav)
          console.log("Remove successfuly");
          alert("fav Successfuly Remove");
        })
        .catch((err) => {
          console.log(err);
        });
      }
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.image}>
        <Image
          source={require("../assets/nike1.png")}
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
          return (
            <View
              key={index}
              style={{
                backgroundColor: `${item}`,
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
        
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          flexDirection: "row",
          marginBottom: 40,
          justifyContent: "space-between",
          borderWidth: 0,
        }}
      >
        {
         isCart ?
        <Button
          icon="cart"
          mode="outlined"
          color="#6E9FFF"
          style={styles.ButtonStyle}
          labelStyle={{ fontSize: 15 }}
          onPress={RemoveCart}
          uppercase={false}
        >
        Remove  Cart
        </Button> :
        <Button
          icon="cart"
          mode="outlined"
          color="#6E9FFF"
          style={styles.ButtonStyle}
          labelStyle={{ fontSize: 15 }}
          onPress={AddtoCart}
          uppercase={false}>
        Add to Cart

        </Button>
      }
      {
          isFav ?
              <Button
                mode="contained"
                color="#6E9FFF"
                style={styles.ButtonStyle}
                icon="heart"
                onPress={RemoveFav}
                labelStyle={{ fontSize: 14, color: "white" }}
                uppercase={false}
              >
                Remove From Fav
              </Button>
              :
              <Button
              mode="contained"
              color="#6E9FFF"
              style={styles.ButtonStyle}
              icon="heart"
              onPress={AddtoFav}
              labelStyle={{ fontSize: 14, color: "white" }}
              uppercase={false}
            >
                Add to Fav 

            </Button>
      }
      </View>

    </ScrollView>
  );
 }
export default ProductDetails; 

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
  ButtonStyle: {
    width: "48%",
    borderRadius: 8,
    // flexDirection:'row-reverse'
  },
})
