import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/Ionicons";
const CustomButton = (props) => {
  const { navigation, title, name } = props;
  return (
    <TouchableRipple
      borderless={true}
      style={styles.Button}
      onPress={() => {navigation}.navigate({ name })}
      rippleColor="rgba(255, 255, 255, .32)"
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
        <MaterialIcons
          name="chevron-forward"
          size={24}
          color={"white"}
        ></MaterialIcons>
      </View>
    </TouchableRipple>
  );
};
const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TitleCont}>
        <Text style={styles.Title}>Dashboard</Text>
      </View>
      <View style={styles.ButtonsCont}>
        <CustomButton
          navigation={navigation}
          title="Add Products"
          name="AddProduct"
        />
        {/* <CustomButton navigation={navigation} title="Delete Products" /> */}
        <CustomButton
          navigation={navigation}
          title="All Products"
          name="AllProducts"
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  Button: {
    backgroundColor: "rgba(0,75,255,0.57)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  TitleCont: {
    height: "8%",
    paddingLeft: 20,
    paddingTop: 15,
  },
  ButtonsCont: {
    justifyContent: "center",
    flex: 1,
  },
});
