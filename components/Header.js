import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Ionicons,Feather } from '@expo/vector-icons';

const Header =({name, navigation})=> (
  
  <View style={styles.header}>
    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>
    <Text>{name}</Text>
    <View style={styles.headerRight}>
    <TouchableOpacity style={{marginRight:10}} onPress={()=> navigation.navigate('search')}>
      <Ionicons name="ios-search" size={32} />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('cart')}>
      <Feather name="shopping-bag" size={32} />
    </TouchableOpacity>
    </View>
    {/* <Text style={{width:50}}>aaa</Text> */}
  </View>
)

export default Header;

const styles = StyleSheet.create({
   
    header:{
      width:"100%",
      height:60,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:20
    },
    headerRight:{
      //width:"50%",
      height:60,
      flexDirection:"row",
      //marginTop:20,
    //  alignItems:"right",
      paddingTop:20,
      //marginRight:10
      
    }

});