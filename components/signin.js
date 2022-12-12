import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomInputs from "./CustomInputs";
import { db, auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const Signin = ({ navigation }) => {
  let users = [];
  useEffect(() => {
    getDocs(collection(db, "Users"))
      .then((docSnap) => {
        docSnap.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const { control, handleSubmit } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState("eye-off");

    const handlePasswordVisibility = () => {
      if (rightIcon === "eye-off") {
        setRightIcon("eye");
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === "eye") {
        setRightIcon("eye-off");
        setPasswordVisibility(!passwordVisibility);
      }
    };

    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility,
    };
  };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const onSubmit = (data) => {
    const result = signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then(() => {
        // alert("SUCUCUCUCUEUSUSSJSSSS");
        console.log("added");
        navigation.navigate("Tabs", { screen: "Homepage" });
      })
      .catch((error) => {
        console.log(error);
        alert("not found");
        //return navigation.navigate('LoginScreen');
      });
    // let userFound = false;
    // users.forEach((user) => {
    //   if (data.Email == user.Email && data.Password == user.Password) {
    //     userFound = true;
    //     navigation.navigate("Tabs", {
    //       screen: "Homepage",
    //       params: { user_data: user },
    //     });
    //   }
    // });
    // if (!userFound) {
    //   alert("Account does not exist");
    // }
  };
  return (
    <View style={styles.SiginContainer}>
      <KeyboardAvoidingView
        // keyboardVerticalOffset={height}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={true}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.title}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome to</Text>
            <View style={styles.second_title}>
              <Text
                style={{ color: "#6E9FFF", fontSize: 30, fontWeight: "bold" }}
              >
                UA
              </Text>
              <Text
                style={{ fontSize: 30, paddingLeft: 8, fontWeight: "bold" }}
              >
                Shop
              </Text>
            </View>
          </View>
          <View style={styles.paragraph}>
            <Text style={{ fontSize: 16, color: "#656565" }}>
              An exciting place to shop all
            </Text>
            <Text style={{ fontSize: 16, color: "#656565" }}>
              your requirements.
            </Text>
          </View>
          <View style={styles.loginForm}>
            <View style={{ marginBottom: 10 }}>
              <CustomInputs
                name="Email"
                placeholder="Email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
                }}
              />
            </View>
            <View>
              <CustomInputs
                name="Password"
                placeholder="Password"
                secureTextEntry={passwordVisibility}
                control={control}
                right={
                  <TextInput.Icon
                    onPress={handlePasswordVisibility}
                    icon={rightIcon}
                  />
                }
                rules={{
                  required: "Password is required",
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
            delayPressIn={100}
            activeOpacity={0.5}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
            <TouchableOpacity>
              <Text style={{ color: "#6E9FFF" }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Sign Up")}
            delayPressIn={100}
            activeOpacity={0.5}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Sign Up
            </Text>
            <Icon
              style={{ paddingRight: 10, alignItems: "center", marginLeft: 10 }}
              name="angle-right"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  SiginContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 90,
    marginLeft: 20,
  },

  second_title: {
    flexDirection: "row",
  },

  paragraph: {
    paddingTop: 7,
    marginLeft: 20,
  },
  loginForm: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 80,
  },
  allpassword: {
    alignItems: "center",
    justifyContent: "center",
  },
  passwordContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  inputfield_password: {
    backgroundColor: "transparent",
    borderColor: "#747474",
    marginBottom: 20,
    width: "90%",
  },

  inputfield: {
    backgroundColor: "transparent",
    borderColor: "#747474",
    marginBottom: 20,
  },
  inputFocus: {
    borderBottomColor: "#6E9FFF",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6E9FFF",
    marginRight: 20,
    marginLeft: 20,
    padding: 6,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
});

export default Signin;
