import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInputs from "./CustomInputs";

const Updatepassword = () => {
  const { control, handleSubmit, watch } = useForm();

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

  return (
    <View>
      <CustomInputs
        name="Password"
        control={control}
        placeholder=" Old Password"
        secureTextEntry={passwordVisibility}
        right={
          <TextInput.Icon onPress={handlePasswordVisibility} icon={rightIcon} />
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
  );
};

export default Updatepassword;

const styles = StyleSheet.create({});
