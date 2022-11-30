import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const NavblockContent = (props) => {
    return (
      <View  style={styles.NavblockContentCont}>
     
      <TouchableOpacity  >
      <View>
      <MaterialIcons style={styles.NavButton} name={props.icon} size={24} color="white" />
      </View>
      </TouchableOpacity>
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
      backgroundColor:'#6E9FFF',
      height:'100%',
      
    },
   
  
  });
export default Navbar

