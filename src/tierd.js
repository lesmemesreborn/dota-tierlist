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
    <View style={styles.background}>
       <ImageBackground source={imagebg} resizeMode="cover" style={styles.image}>
       <FlatList
        data={heroData}
        renderItem={(data) => (
          <TouchableOpacity
          onPress={() => navigation.navigate ("HeroInfo", {id: data.item.id, name: data.item.name, img: data.item.img, desc:data.item.desc})}
        >
            <View
              style={{
                backgroundColor: '#af3118',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
              }}
            >
              <Image
                style={{ width: 80, height: 40, borderRadius: 50 }}
                source={{ uri: data.item.img }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '400',
                  fontSize: 20,
                }}
              >
                {data.item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  }
})