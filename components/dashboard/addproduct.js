import {
  StyleSheet,
  Button,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInputs from "../CustomInputs";
import KeyboardWrapper from "../KeyboardWrapper";
import { db } from "../../firebase/firebase";
//import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
const Addproduct = () => {
  // const [ImageUrl, setImageUrl] = React.useState([]);
  const { control, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    const userRef = collection(db, "Products");
    const q = query(userRef, where("Title", "==", data.Title));
    // getDocs(q)
    //   .then((result) => {
    //     if (result.empty) {
    //       addDoc(userRef, {
    //         Title: data.Title,
    //         Category: data.Category,
    //         Colors: data.Color,
    //         Price: data.Price,
    //         Description: data.Description,
    //         ImageUrl: data.ImageUrl,
    //         Sizes: data.Sizes
    //       }).then(() => {
    //         console.warn("data submited");
    //         navigation.navigate("Homepage");
    //       });
    //     } else {
    //       alert("Product already exist");
    //     }
    //   })
    //   .catch((error) => {
    //     console.warn(error);
    //   });
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
              name="Colors"
              placeholder="Color"
              control={control}
              rules={{
                required: "Color is required",
                minLength: {
                  value: 3,
                  message: "Color should be more than 3 characters",
                },
                maxLength: {
                  value: 24,
                  message: "Color should be less than 24 characters",
                },
              }}
            />
            <CustomInputs
              name="Price"
              placeholder="Price"
              control={control}
              rules={{
                required: "Price is required",
                minLength: {
                  value: 3,
                  message: "Price should be more than 3 characters",
                },
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

            <View style={{ marginTop: 20 }}>
              <Button
                color="white"
                labelStyle={{ fontWeight: "bold" }}
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
              >
                Sign up
              </Button>
            </View>
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
  InputStyle: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: "white",
  },
  Cont: {
    // backgroundColor: 'red',
    flex: 1,
    // borderWidth: 1
  },
  InputCont: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
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
