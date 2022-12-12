import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInputs from "./CustomInputs";
import { Button, TextInput } from "react-native-paper";
import { getUserData } from "./homepage";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Updatepassword = ({ navigation, route }) => {
  const { Userid } = route.params;
  const { control, handleSubmit, watch } = useForm();
  const User = getUserData();
  //console.log(User);
  console.log(Userid);
  const pass = watch("newPassword");
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
  const docRef = doc(db, "Users", User.id);

  const onSubmit = (data) => {
    if (data.oldPassword == User.Password) {
      const Password = {
        Password: data.newPassword,
      };
      updateDoc(docRef, Password)
        .then(() => {
          console.log("added successfuly");
          alert("Password Successfuly changed");
          navigation.navigate("Profile");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password is incorrect");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 80 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Password Update
        </Text>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <CustomInputs
          name="oldPassword"
          control={control}
          placeholder=" Old Password"
          secureTextEntry={passwordVisibility}
          rules={{
            required: " Old Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 character",
            },
          }}
        />
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
        <CustomInputs
          name="newPassword"
          control={control}
          placeholder=" New Password"
          secureTextEntry={passwordVisibility}
          right={
            <TextInput.Icon
              onPress={handlePasswordVisibility}
              icon={rightIcon}
            />
          }
          rules={{
            required: " New Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 character",
            },
          }}
        />
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
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
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Button
          style={{ backgroundColor: "#6E9FFF" }}
          onPress={handleSubmit(onSubmit)}
          mode="contained"
          contentStyle={{ height: 50, borderRadius: 10 }}
        >
          Update Password
        </Button>
      </View>
    </View>
  );
};

export default Updatepassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
