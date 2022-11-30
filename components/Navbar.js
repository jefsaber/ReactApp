import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/Ionicons';
import  TouchableRipple  from 'react-native-paper'
const NavblockContent = (props) => {
    return (
      <View  style={styles.NavblockContentCont}>
     
      <TouchableRipple    style={styles.NavblockContent}>
      <View style={styles.NavButtonCont}>
      <MaterialIcons style={styles.NavButton} name={props.icon} size={24} color="white" />
      </View>
      </TouchableRipple>
      </View>
    );
  }
const Navbar = () => {
    return (
      <View style={styles.NavCont}>
        <View style={styles.NavBlock}>
          <NavblockContent icon='home' title='Home'/>
          <NavblockContent title='Search' icon='search'/>
          <NavblockContent title='Favorites' icon='heart'/>
          <NavblockContent title='Cart' icon='home' />
          <NavblockContent title='More' icon='home'/>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    NavCont: {
      position: 'relative',
      bottom:0,
      width:'100%',
    },
    NavBlock : {
      backgroundColor:'#6E9FFF',
      flexDirection: "row",
      justifyContent:'space-between',
      alignItems:'center',
      height:60
    },
    NavblockContentCont:{
      width:'20%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'red',
      borderWidth:1,
      height:'100%',
      flex:1
      
    },
    NavblockContent:{
      alignItems:'center',
    },
  
  });
export default Navbar
  