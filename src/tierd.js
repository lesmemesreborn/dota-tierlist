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

export default function TierD({navigation}) {
  const imagebg =  Background
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Chen_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215432',
      id: 66,
      name: 'Chen',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5d/Lone_Druid_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213427',
      id: 80,
      name: 'Lone Druid',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9e/Visage_icon.png/revision/latest/scale-to-width-down/256?cb=20160411221032',
      id: 92,
      name: 'Visage',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Treant_Protector_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210417',
      id: 83,
      name: 'Treant Protector',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Arc_Warden_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214723',
      id: 113,
      name: 'Arc Warden',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Broodmother_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214142',
      id: 61,
      name: 'Broodmother',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/27/Crystal_Maiden_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214805',
      id: 5,
      name: 'Crystal Maiden',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/41/Enchantress_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215320',
      id: 58,
      name: 'Enchantress',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e6/Dazzle_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220519',
      id: 50,
      name: 'Dazzle',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b9/Keeper_of_the_Light_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215721',
      id: 90,
      name: 'Keeper of the Light',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f3/Shadow_Demon_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220956',
      id: 79,
      name: 'Shadow Demon',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Techies_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215855',
      id: 105,
      name: 'Techies',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220105',
      id: 30,
      name: 'Witch Doctor',
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
                style={{ width: 80, height: 40, borderRadius: 10 }}
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