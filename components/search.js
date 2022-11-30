import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { data } from "../assets/Data";
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {setSearchQuery(query)
  data.filter((item)=>{
    item
  })
  };
  return (
    <View style={styles.container}>
      <View style={styles.SearchCont}>
        <View style={styles.SearchButton}>
          <MaterialIcons name={"arrow-back"} size={28} color="black" />
        </View>
        <View style={styles.SearchInputCont}>
          <TextInput
            cursorColor={"rgba(0,0,0,1)"}
            value={searchQuery}
            onChangeText={onChangeSearch}
            style={styles.SearchInput}
            placeholder="Search"
            placeholderTextColor={"rgba(0,0,0,0.6)"}
          ></TextInput>

          <TouchableOpacity
            onPress={() => {
              setSearchQuery("");
            }}
          >
            {searchQuery && (
              <MaterialIcons name={"close"} size={26} color={"black"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.RecentCont}>
        {
          // searchQuery &&
          <View>
            <Text style={styles.RecentText}>Recent</Text>
            <View>
              <ScrollView>
                <View style={styles.ProductsCont}>
                
                  {data.map((item) => {
                    return (
                      <TouchableOpacity
                        delayPressIn={50}
                        key={item.id}
                      >
                        <View style={styles.ProductCont}>
                          <View style={styles.ProductDetails}>
                          <Image resizeMode="contain" source={item.imageUrl}  style={styles.ProductImage}/>
                          <View  >
                            <Text style={styles.ProductTitle}>
                            {item.title}
                            </Text>
                            <Text style={styles.ProductCategory}>
                            {item.category}
                            </Text>
                          </View>
                          </View>
                          <TouchableOpacity 
                        delayPressIn={50}>
                          <MaterialIcons name="close" size={28} />
                        </TouchableOpacity>
                       

                        </View>
                        </TouchableOpacity>
                       
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        }
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  SearchCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  SearchButton: {
    width: "15%",
    alignItems: "center",
  },
  SearchInputCont: {
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  SearchInput: {
    paddingLeft: 10,
    width: "80%",
  },
  RecentCont: {
    paddingLeft: 20,
    marginVertical: 15,
  },
  RecentText: {
    fontWeight: "bold",
    // fontSize:'20'
    fontSize: 18,
  },
  ProductDetails :{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'60%' ,
    height:'100%', 
  },
  ProductsCont :{
    marginTop:10,
  },
  ProductCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
    width:'98%',
    // borderWidth:1
  },
  ProductImage :{
    width:100,
    height:70,
  },
  ProductTitle :{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:5
  },
  
});
