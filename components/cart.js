import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Productlist from "./productlist";
import { data } from "../assets/Data";
import { Button ,TouchableRipple } from 'react-native-paper';
import MaterialIcons from "@expo/vector-icons/Ionicons";

const Cart = () => {
    const iconfunction = ()=>{
        console.log('1')
      }
   return (
    <View style={styles.container}>
        <View style={styles.CartCont} >
        <Productlist icon='close' title='Cart' data={data} iconfunction={iconfunction} />
        </View>    
          <TouchableRipple borderless={true} style={styles.Button}
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)">
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontSize:20}}>Next</Text>
          <MaterialIcons name='chevron-forward' size={24} color={'white'}></MaterialIcons>
          </View>
        </TouchableRipple>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  Button : {
    backgroundColor:'rgba(0,75,255,0.57)',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    width:'80%',
    alignSelf:'center'
    ,borderRadius:10,
  },
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ffffff",
      },
      CartCont: {
        paddingLeft: 20,
        marginBottom: 15,
        paddingTop:15,
        
        maxHeight:'80%',
        minHeight:'60%',

      },
     
})