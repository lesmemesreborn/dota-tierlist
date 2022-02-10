import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Background from './etc/back.png';
import {LinearGradient} from 'expo-linear-gradient'


export default function TierG({navigation}) {
  const imagebg =  Background
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1b/Sven_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205500',
      id: 18,
      name: 'Sven',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/85/Meepo_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214421',
      id: 82,
      name: 'Meepo',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Alchemist_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210240',
      id: 73,
      name: 'Alchemist',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Warlock_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220306',
      id: 37,
      name: 'Warlock',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/96/Shadow_Shaman_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215130',
      id: 27,
      name: 'Shadow Shaman',
      desc: 'description template'
    },
  ]);
  
  return (
    <LinearGradient colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']} style={styles.linearGradient}>
    <View style={styles.background}>
      
       <FlatList
        data={heroData}
        renderItem={(data) => (
          <TouchableOpacity
          onPress={() => navigation.navigate ("HeroInfo", {id: data.item.id, name: data.item.name, img: data.item.img, desc:data.item.desc})}
        >
            <View
              style={{
                backgroundColor: '#2471A3',
                paddingVertical: 10,
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 3,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
                borderColor: '#212F3D'
              }}
            >
              <Image
                style={{ width: 80, height: 40, borderRadius: 50 }}
                source={{ uri: data.item.img }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '700',
                  fontSize: 20,
                  textShadowColor: 'navy',
                  textShadowRadius: 2
                }}
              >
                {data.item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    
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
    justifyContent: "center" 
},
  modalView: {
    backgroundColor:'#a22511', 
    flex: 1
  },

  modalTitle: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10
  },
  modalImage: {
    width: 170,
    height: 100,
    alignSelf: "center",
    borderRadius: 2
  },
  modalDesc: {
    fontSize: 14,
    
  },
  modalBack: {
    alignSelf: "center",
  },
  linearGradient: {
    flex: 1,

  },
})