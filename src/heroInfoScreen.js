import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, View, ImageBackground
} from 'react-native';
import Background from './etc/back.png'
import { Divider } from "@react-native-material/core";

const heroInfo = ({route}) => {
    // const {state} = useState(null)
    const hero = route.params
    const imagebg =  Background
    
    return (

        <View style={styles.background}>
             <ImageBackground source={imagebg} resizeMode="cover" style={styles.image}>
            <Text style={styles.descTitle}>{hero.name}</Text>
            <Divider color='black' />
            <Image style={styles.descImage} source={{uri: hero.img}} />
            <Divider color='black'/>
            <Text style={{textAlign:'center', marginTop: 5}}>OПИСАНИЕ: </Text>
            <Text style={styles.descDesc}>{hero.desc}</Text>
            <Divider color='black'/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
      backgroundColor:'#a22511', 
      flex: 1
    },
    image: {
      flex: 1,
  },
    modalView: {
      backgroundColor:'#a22511', 
      flex: 1
    },
  
    descTitle: {
      fontSize: 24,
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10
    },
    descImage: {
      width: 220,
      height: 120,
      alignSelf: "center",
      borderRadius: 2,
      
    },
    descDesc: {
      fontSize: 16,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15,
    },
    descBack: {
      alignSelf: "center",
    }
  })

export default heroInfo