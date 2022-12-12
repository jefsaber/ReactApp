import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import { db, auth } from "../firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import call from "react-native-phone-call";
import email from "react-native-email";
import * as Location from 'expo-location';import * as Notifications from 'expo-notifications';
const args = {
  number: "81236606", // String value with the number to call
  prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
  skipCanOpen: true, // Skip the canOpenURL check
};

const Profile = ({ navigation }) => {

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const [location, setLocation] = useState(null); 
  const getNotification = ()=>{
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
      }
  const getLocation =async ()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied')
      return;
    }
    let locationc = await Location.getCurrentPositionAsync({});
    setLocation(locationc);
    alert(JSON.stringify(location))
    getNotification();
  }

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

  useEffect(() => {
    getuserinfo();
  }, []);
  console.log(tmpUser)

  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    //console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImage(_image.uri);
      const data = {
        ImageUrl: image,
      };
      updateDoc(doc(db, "Users", auth.currentUser.uid), data)
        .then(() => {
          console.log("added successfuly");
          tmpUser.ImageUrl = data.ImageUrl;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleEmail = () => {
    const to = ["jef.saber@hotmail.com"]; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      cc: ["souheilnasser4@gmail.com"], // string or array of email addresses
      checkCanOpen: false, // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          {image && (
            <Image
              source={{ uri: tmpUser.ImageUrl }}
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
          <Text style={{ fontSize: 24 }}>
            {tmpUser.FirstName + " " + tmpUser.LastName}
          </Text>
       
        </View>
        <View style={styles.passbutton}>
          <Button
            style={{ backgroundColor: "#6E9FFF" }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="lock"
            mode="contained"
            onPress={() =>
              navigation.navigate("Update Password", {
                Userid: tmpUser.id,
              })
            }
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
            onPress={handleEmail}
          >
            Send Us Email
          </Button>
          <Button
            style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
            contentStyle={{ justifyContent: "flex-start" }}
            icon="phone"
            mode="contained"
            onPress={() => call(args).catch(console.error)}
          >
            call
          </Button>
        </View>
        {tmpUser.IsAdmin && (
          <View style={styles.dashboard}>
            <Text style={{ fontSize: 18 }}>Dashboard</Text>
            <Button
              style={{ backgroundColor: "#6E9FFF", marginTop: 15 }}
              contentStyle={{ justifyContent: "flex-start" }}
              mode="contained"
              onPress={() =>
                navigation.navigate("Dash", { screen: "Dashboard" })
              }
            >
              Dashboard
            </Button>
          </View>
        )}
        <View style={styles.dashboard}>
          <Button
            style={{ backgroundColor: "#6E9FFF" }}
            onPress={() => navigation.navigate("Auth", { screen: "Sigin In" })}
            mode="contained"
          >
            Logout
          </Button>
        </View>
        <View style={styles.logout}>
          <Button
            style={{ backgroundColor: "#6E9FFF" }}
            onPress={getLocation}
            mode="contained"
          >
           Location
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
  dashboard: {
    marginTop: 30,
    width: "80%",
  },
});
