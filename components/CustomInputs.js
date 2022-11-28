import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";

const CustomInputs = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  right,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.container]}>
            <TextInput
              theme={{
                colors: {
                  primary: "#6E9FFF",
                },
              }}
              right={right}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              mode="outlined"
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch", marginTop: 5 }}>
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
  },
  input: {
    backgroundColor: "white",
  },
});

export default CustomInputs;
