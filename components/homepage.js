import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Homepage = () => {
  return (
    <View style={styles.container}>
    <View style={{ paddingLeft: 20 }}>
      <Text style={{ fontSize: 28 , lineHeight:50, fontWeight:'bold'}}>New collection  {'\n'}Fall 2022</Text>
    </View>
    {/* <ScrollView style={styles.products}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("Details", {
                  id: item.id,
                  category: item.category,
                  title: item.title,
                  color: item.color,
                  price: item.price,
                  image: item.imageUrl,
                  description: item.description,
                  sizes: item.sizes,
                });
              }}
              style={styles.productList}
            >
              <Image source={item.imageUrl} />
              <Text
                style={{
                  color: "#383838",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 30,
                  marginLeft: 10,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 12, marginLeft: 10 }}>
                {item.category}
              </Text>

              <Text
                style={{ color: "#FFD600", fontSize: 14, marginLeft: 10 }}
              >
                ${item.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView> */}
  </View>
  )
}

export default Homepage

const styles = StyleSheet.create({

})