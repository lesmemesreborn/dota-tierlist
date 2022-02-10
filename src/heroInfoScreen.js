import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, View, ImageBackground
} from 'react-native';
import Background from './etc/back.png'
import { Divider } from "@react-native-material/core";
import {LinearGradient} from 'expo-linear-gradient'

const heroInfo = ({route}) => {
    // const {state} = useState(null)
    const hero = route.params
    const imagebg =  Background

    return (
      <LinearGradient colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']} style={styles.linearGradient}>
        <View style={styles.background}>
            <Text style={styles.descTitle}>{hero.name}</Text>
            <Divider color='black' />
            <Image style={styles.descImage} source={{uri: hero.img}} />
            <Divider color='black'/>
            <Text style={styles.descSubTitle}>OПИСАНИЕ: </Text>
            <Text style={styles.descDesc}>{hero.desc}</Text>
            <Divider color='black'/>
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
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
      fontSize: 28,
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10,
      letterSpacing: 3,
      fontWeight: 'bold',
      color: '#CB4335',
      textTransform: 'uppercase',
      textShadowColor: 'black',
      textShadowRadius: 7,
    },
    descSubTitle: {
      textAlign:'center',
       marginTop: 5,
        fontWeight: 'bold',
         fontSize: 18,
      textShadowColor: 'black',
      textShadowRadius: 2,
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
      fontStyle:'italic'
    },
    descBack: {
      alignSelf: "center",
    },
    linearGradient: {
      flex: 1,
    },
  })

export default heroInfo