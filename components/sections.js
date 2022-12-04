import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/Ionicons";
const Section = (props) => {
    const {data,navigation,SectionTitle} = props;
    return (
      <View>
   <ScrollView style={styles.ProductsScrollCont}>
    {
      SectionTitle &&
     <View style={styles.SectionCont}>
      <Text style={styles.SectionTitle}>
        {SectionTitle}
      </Text>
      {/* <TouchableOpacity delayPressIn={30}  >
      <MaterialIcons size={45} name='chevron-forward-circle'></MaterialIcons>
      </TouchableOpacity> */}
    </View>
    }
    <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            
          }}
        >
          {data.map((item) => {
            return (

              <TouchableOpacity delayPressIn={50}
                key={item.id}
                style={styles.Product}
                onPress={() => {
                  navigation.navigate("ProductDetails", {
                    id: item.id,
                    category: item.category,
                    title: item.title,
                    color: item.color,
                    price: item.price,
                    image: item.imageUrl,
                    description: item.description,
                    sizes: item.sizes,
                  })}}
                >
                  <TouchableOpacity
                   style={{
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    paddingTop:5,
                    paddingRight:5,
                  }}>
                  <MaterialIcons name='heart-outline' size={24} color='red' />
                  </TouchableOpacity>
               
                  <Image  source={item.imageUrl} />

                <Text
                  style={{
                    color: "#383838",
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 15,
                    
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

export default Section

const styles = StyleSheet.create({
    ProductsScrollCont: {
        marginBottom: 0,
        marginHorizontal: 20,
      },
      Product: {
        width: "45%",
        backgroundColor: "#EFEFEF",
        height: 190,
        borderRadius: 12,
        marginBottom: 20,
        justifyContent:'space-evenly',
        paddingLeft:7,
      },
      SectionTitle : {
        fontSize: 24 ,fontWeight:'bold',marginVertical:20
      },
      SectionCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }
})