import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";

const Profile = ({ navigation }) => {
  const User = {
    id: 1,
    fname: "John",
    lname: "Doe",
  };

  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImage(_image.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity
              hitSlop={{ right: 0, left: 0, top: 8, bottom: 0 }}
              onPress={addImage}
              style={styles.uploadBtn}
            >
              <Text style={{ color: "#fff" }}>
                {image ? "Edit" : "Upload"} Image
              </Text>
              <AntDesign name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 24 }}>{User.fname + " " + User.lname}</Text>
          <Text style={{ textAlign: "center", marginTop: 10 }}>9 May 2020</Text>
        </View>
        <View style={styles.passbutton}>
          <Button
            style={{ backgroundColor: "#6E9FFF" }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="lock"
            mode="contained"
            onPress={() => navigation.navigate("Update Password")}
          >
            Password Update
          </Button>
        </View>
        <View style={styles.shop}>
          <Text style={{ fontSize: 18 }}>Shop</Text>
          <Button
            style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="heart"
            mode="contained"
            onPress={() => navigation.navigate("Favorites")}
          >
            Favourites
          </Button>
          <Button
            style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="cart"
            mode="contained"
            onPress={() => navigation.navigate("Cart")}
          >
            Shopping Cart
          </Button>
        </View>
        <View style={styles.contact}>
          <Text style={{ fontSize: 18 }}>Get In Touch</Text>
          <Button
            style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="mail"
            mode="contained"
          >
            Send Us Email
          </Button>
          <Button
            style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="phone"
            mode="contained"
          >
            call
          </Button>
        </View>
        <View style={styles.logout}>
          <Button style={{ backgroundColor: "#6E9FFF" }} mode="contained">
            Logout
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imagecontainer: {
    elevation: 2,
    height: 160,
    width: 160,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 30,
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#6E9FFF",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginTop: 20,
  },
  passbutton: {
    marginTop: 30,
    width: "80%",
  },
  shop: {
    width: "80%",
    marginTop: 30,
  },
  contact: {
    width: "80%",
    marginTop: 30,
  },
  logout: {
    marginTop: 50,
    width: "80%",
    marginBottom: 50,
  },
});
