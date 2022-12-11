import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { Button, TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";
import CustomInputs from "./CustomInputs";
import { useHeaderHeight } from "@react-navigation/elements";
import { data } from "../assets/Data";

const Signup = ({ navigation }) => {
  const height = useHeaderHeight();
  const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState("eye");

    const handlePasswordVisibility = () => {
      if (rightIcon === "eye") {
        setRightIcon("eye-off");
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === "eye-off") {
        setRightIcon("eye");
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

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const { control, handleSubmit, watch } = useForm();
  const pass = watch("Password");

  const onSubmit = async (data) => {
    const userRef = collection(db, "Users");
    const q = query(userRef, where("Email", "==", data.Email));
    getDocs(q)
      .then((result) => {
        if (result.empty) {
          addDoc(userRef, {
            Email: data.Email,
            Password: data.Password,
            FirstName: data.FirstName,
            LastName: data.LastName,
            IsAdmin: false,
          }).then(() => {
            console.warn("data submited");
            navigation.navigate("Homepage");
          });
        } else {
          alert("email is already in use");
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <View style={styles.Signupcontainer}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height + 47}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.title}>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
            >
              Create An Account
            </Text>
          </View>
          <View style={styles.Signupform}>
            <View
              style={{ flexDirection: "row", width: "100%", marginBottom: 10 }}
            >
              <View style={{ width: "48%", marginRight: "4%" }}>
                <CustomInputs
                  name="FirstName"
                  placeholder="First Name"
                  control={control}
                  rules={{
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "first name should be more than 3 characters",
                    },
                    maxLength: {
                      value: 24,
                      message: "first name should be less than 24 characters",
                    },
                  }}
                />
              </View>
              <View style={{ width: "48%" }}>
                <CustomInputs
                  name="LastName"
                  placeholder="Last Name"
                  control={control}
                  rules={{
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "last name should be more than 3 characters",
                    },
                    maxLength: {
                      value: 24,
                      message: "last name should be less than 24 characters",
                    },
                  }}
                  style={{ width: "40%" }}
                />
              </View>
            </View>
            <View style={styles.input}>
              <CustomInputs
                name="Email"
                control={control}
                placeholder="Email"
                rules={{
                  required: "Email is required",
                  pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
                }}
              />
            </View>
            <View style={styles.input}>
              <CustomInputs
                name="Password"
                control={control}
                placeholder="Password"
                secureTextEntry={passwordVisibility}
                right={
                  <TextInput.Icon
                    onPress={handlePasswordVisibility}
                    icon={rightIcon}
                  />
                }
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password should be minimum 8 character",
                  },
                }}
              />
            </View>
            <View style={styles.input}>
              <CustomInputs
                name="confirmpassword"
                control={control}
                placeholder="Confirm Password"
                secureTextEntry={passwordVisibility}
                right={
                  <TextInput.Icon
                    onPress={handlePasswordVisibility}
                    icon={rightIcon}
                  />
                }
                rules={{
                  required: "Confirm Password is required",
                  validate: (value) => value == pass || "Password do not match",
                }}
              />
            </View>
          </View>
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
          <View style={{ marginTop: 20 }}>
            <Button color="#6E9FFF" mode="outlined" style={styles.signinbutton}>
              Sign in
            </Button>
          </View>
          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ textAlign: "center" }}>
              By Signing up, you agree to our
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={{ color: "#6E9FFF" }}>Terms</Text>
              <Text> and </Text>
              <Text style={{ color: "#6E9FFF" }}>Conditions</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 70,
              paddingBottom: 25,
            }}
          >
            <Text>Powered by </Text>
            <Text style={{ color: "#6E9FFF" }}>UA</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  Signupcontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 100,
  },

  Signupform: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 50,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6E9FFF",
    marginRight: 20,
    marginLeft: 20,
    padding: 6,
  },
  signinbutton: {
    marginRight: 20,
    marginLeft: 20,
    padding: 6,
    borderColor: "#6E9FFF",
  },
});

export default Signup;
