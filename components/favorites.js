import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Productlist from "./productlist";
import { data } from "../assets/Data";

const Favorites = () => {
    const iconfunction = ()=>{
        console.log('1')
      }
   return (
    <View style={styles.container}>
        <View style={styles.RecentCont} >
        <Productlist icon='heart' title='My Favorites' data={data} iconfunction={iconfunction} />
        </View>        
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ffffff",
      },
      RecentCont: {
        paddingLeft: 20,
        marginBottom: 15,
        paddingTop:15,
        
      },
})