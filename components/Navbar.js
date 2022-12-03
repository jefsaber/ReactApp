import { StyleSheet,  View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/Ionicons';

export const NavblockContent = (props) => {

    return (
      <View  style={styles.NavblockContentCont}>
        <TouchableOpacity>
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
          <NavblockContent title='Home' icon='home' />
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

// return (
//   <Tab.Navigator
//     initialRouteName="Feed"
//     screenOptions={{
//       tabBarActiveTintColor: '#e91e63',
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={Feed}
//       options={{
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Notifications"
//       component={Notifications}
//       options={{
//         tabBarLabel: 'Updates',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="bell" color={color} size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={Profile}
//       options={{
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="account" color={color} size={size} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );
// }
