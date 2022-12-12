import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/Ionicons";

const Productlist = (props) => {
  const { data, title, icon, iconfunction, navigation } = props;

  return (
    <ScrollView>
      <View>
        <Text style={styles.RecentText}>{title}</Text>

        <View>
          <View style={styles.ProductsCont}>
            {data.map((item) => {
              return (
                <TouchableOpacity
                  delayPressIn={50}
                  key={item.id}
                  activeOpacity={0.4}
                  onPress={() => {
                    navigation.navigate("ProductDetails", {
                      id: item.id,
                      category: item.Category,
                      title: item.Title,
                      color: item.Colors,
                      price: item.Price,
                      image: item.ImageUrl,
                      description: item.Description,
                      sizes: item.Sizes,
                    });
                  }}
                >
                  <View style={styles.ProductCont}>
                    <View style={styles.ProductDetails}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/nike1.png")}
                        style={styles.ProductImage}
                      />
                      <View>
                        <Text style={styles.ProductTitle}>{item.Title}</Text>
                        <Text style={styles.ProductCategory}>
                          {item.Category}
                        </Text>
                      </View>
                    </View>
                    {title == "Cart" && (
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Text>1pc</Text>
                        </View>
                        <View style={styles.PriceCont}>
                          <Text>${item.Price}</Text>
                        </View>
                      </View>
                    )}

                    <TouchableOpacity
                      delayPressIn={50}
                      style={styles.CloseButton}
                      hitSlop={{ top: 9, bottom: 9, left: 9, right: 9 }}
                      onPress={iconfunction}
                    >
                      <MaterialIcons name={icon} size={24} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Productlist;

const styles = StyleSheet.create({
  RecentCont: {
    paddingLeft: 20,
    marginBottom: 15,
    paddingTop: 15,
  },
  RecentText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ProductDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "55%",
    height: "100%",
  },
  ProductsCont: {
    marginTop: 10,
  },
  ProductCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "96%",
  },
  ProductImage: {
    width: 90,
    height: 60,
  },
  ProductTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  ProductCategory: {
    fontSize: 12,
  },
  PriceCont: {
    marginLeft: 10,
  },
});
