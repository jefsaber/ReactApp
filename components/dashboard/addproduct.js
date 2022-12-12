import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInputs from "../CustomInputs";
import KeyboardWrapper from "../KeyboardWrapper";
import { db } from "../../firebase/firebase";
import { addDoc, doc, collection } from "firebase/firestore";

const Addproduct = () => {
  // const [ImageUrl, setImageUrl] = React.useState([]);
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    let temp = [];
    for (let i = 0; i < 4; i++) {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      t = "#" + n.slice(0, 6);
      temp.push(t);
    }
    addDoc(collection(db, "Products"), {
      Category: data.Category,
      Description: data.Description,
      Price: data.Price,
      Title: data.Title,
      Colors: temp,
      Sizes: [32, 34, 36, 38, 40],
      ImageUrl: "",
    })
      .then(() => {
        console.log("Product Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.TitleCont}>
        <Text style={styles.Title}>Dashboard</Text>
      </View>
      <KeyboardWrapper>
        <View
          style={styles.Cont}
          onTouchStart={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.InputCont}>
            <CustomInputs
              name="Title"
              placeholder="Title"
              control={control}
              rules={{
                // required: "Title name is required",
                minLength: {
                  value: 3,
                  message: "Title name should be more than 3 characters",
                },
                maxLength: {
                  value: 24,
                  message: "Title name should be less than 24 characters",
                },
              }}
            />

            <CustomInputs
              name="Category"
              placeholder="Category"
              control={control}
              rules={{
                // required: "Category is required",
                minLength: {
                  value: 3,
                  message: "Category should be more than 3 characters",
                },
                maxLength: {
                  value: 24,
                  message: "Category should be less than 24 characters",
                },
              }}
            />
            <CustomInputs
              name="Price"
              placeholder="Price"
              control={control}
              rules={{
                required: "Price is required",
                maxLength: {
                  value: 24,
                  message: "Price should be less than 24 characters",
                },
              }}
            />
            <CustomInputs
              name="Description"
              placeholder="Description"
              control={control}
              rules={{
                required: "Description is required",
                minLength: {
                  value: 3,
                  message: "Description should be more than 3 characters",
                },
                maxLength: {
                  value: 24,
                  message: "Description should be less than 24 characters",
                },
              }}
            />

            <TouchableOpacity style={{ marginTop: 20, width: "100%" }}>
              <Button
                color="white"
                labelStyle={{ fontWeight: "bold" }}
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
              >
                Add Product
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardWrapper>
    </View>
  );
};

export default Addproduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#6E9FFF",
    padding: 6,
  },
  InputStyle: {
    width: "80%",
    marginBottom: 20,
    backgroundColor: "white",
  },
  Cont: {
    // backgroundColor: 'red',
    flex: 1,
    //borderWidth: 1,
    marginTop: 20,
  },
  InputCont: {
    flex: 1,
    alignItems: "center",
    //borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  TitleCont: {
    height: "8%",
    paddingLeft: 20,
    paddingTop: 15,
    zIndex: 10000,
  },
});
