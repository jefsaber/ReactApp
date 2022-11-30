import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import {DATA} from '../assets/Data.js';
import MaterialIcons from '@expo/vector-icons/Ionicons';

const Homepage = () => {
  return (
    <View style={styles.container}>
    <View style={{ paddingLeft: 20 }}>
      <Text style={{ fontSize: 28 , lineHeight:50, fontWeight:'bold'}}>New collection  {'\n'}Fall 2022</Text>
    </View>
   
    <ScrollView style={styles.ProductsScrollCont}>
    <View style={styles.SectionCont}>
      <Text style={styles.SectionTitle}>
        On Sale
      </Text>
      {/* <TouchableOpacity delayPressIn={30}  >
      <MaterialIcons size={45} name='chevron-forward-circle'></MaterialIcons>
      </TouchableOpacity> */}
    </View>
    <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity delayPressIn={50}
              key={item.id}
              style={styles.Product}
            >
              <Image source={item.imageUrl} />
              <Text
                style={{
                  color: "#383838",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 30,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 12 }}>
                {item.category}
              </Text>

              <Text
                style={{ color: "#FFD600", fontSize: 14}}
              >
                ${item.price}
              </Text>
            </TouchableOpacity>
          );
        })}
       
      </View>
    </ScrollView>
   
  </View>
  )
}

const styles = StyleSheet.create({
  SectionTitle : {
    fontSize: 24 ,fontWeight:'bold',marginVertical:20
  },
  SectionCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // borderWidth:1
  }
  ,
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  ProductsScrollCont: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  Product: {
    width: "45%",
    backgroundColor: "#EFEFEF",
    height: 190,
    borderRadius: 12,
    marginBottom: 20,
    justifyContent:'space-evenly',
    paddingLeft:7
  },
});

export default Homepage
