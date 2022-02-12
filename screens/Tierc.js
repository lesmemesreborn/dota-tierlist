import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function TierС({ navigation }) {
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9f/Silencer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215503',
      id: 75,
      name: 'Silencer',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Magnus_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212403',
      id: 97,
      name: 'Magnus',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Leshrac_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220559',
      id: 52,
      name: 'Leshrac',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Luna_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213209',
      id: 48,
      name: 'Luna',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Legion_Commander_icon.png/revision/latest/scale-to-width-down/256?cb=20190401095109',
      id: 104,
      name: 'Legion Commander',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c4/Nature%27s_Prophet_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215241',
      id: 53,
      name: "Nature's Prophet",
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/52/Terrorblade_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214652',
      id: 109,
      name: 'Terrorblade',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205834',
      id: 38,
      name: 'Beastmaster',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Puck_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214839',
      id: 13,
      name: 'Puck',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Huskar_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210201',
      id: 59,
      name: 'Huskar',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Zeus_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215025',
      id: 22,
      name: 'Zeus',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213752',
      id: 11,
      name: 'Shadow Fiend',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/18/Underlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160828140759',
      id: 108,
      name: 'Underlord',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9a/Timbersaw_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210643',
      id: 98,
      name: 'Timbersaw',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Tusk_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210826',
      id: 100,
      name: 'Tusk',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Windranger_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214951',
      id: 21,
      name: 'Windranger',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4a/Winter_Wyvern_icon.png/revision/latest/scale-to-width-down/256?cb=20160411221057',
      id: 112,
      name: 'Winter Wyvern',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215538',
      id: 84,
      name: 'Ogre Magi',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205834',
      id: 78,
      name: 'Brewmaster',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Abaddon_icon.png/revision/latest/scale-to-width-down/256?cb=20210125060638',
      id: 102,
      name: 'Abaddon',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211422',
      id: 2,
      name: 'Axe',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4d/Bristleback_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210744',
      id: 99,
      name: 'Bristleback',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Chaos_Knight_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212259',
      id: 81,
      name: 'Chaos Knight',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d8/Clockwerk_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210004',
      id: 51,
      name: 'Clockwerk',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Doom_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212104',
      id: 69,
      name: 'Doom',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f0/Troll_Warlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213539',
      id: 49,
      name: 'Dragon Knight',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/be/Earth_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211247',
      id: 107,
      name: 'Earth Spirit',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Lifestealer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211952',
      id: 54,
      name: 'Lifestealer',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Omniknight_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210119',
      id: 57,
      name: 'Omniknight',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/14/Phoenix_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211344',
      id: 110,
      name: 'Phoenix',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/55/Tiny_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205608',
      id: 19,
      name: 'Tiny',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Undying_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212333',
      id: 85,
      name: 'Undying',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Bloodseeker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213712',
      id: 4,
      name: 'Bloodseeker',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/73/Faceless_Void_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213936',
      id: 41,
      name: 'Faceless Void',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4f/Gyrocopter_icon.png/revision/latest/scale-to-width-down/256?cb=20181101233643',
      id: 72,
      name: 'Gyrocopter',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png/revision/latest/scale-to-width-down/256?cb=20201217205959',
      id: 123,
      name: 'Hoodwink',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/03/Juggernaut_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212710',
      id: 8,
      name: 'Juggernaut',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Nyx_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214454',
      id: 88,
      name: 'Nyx Assassin',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/66/Razor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213830',
      id: 15,
      name: 'Razor',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Riki_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212958',
      id: 32,
      name: 'Riki',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Slark_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214526',
      id: 93,
      name: 'Slark',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/ff/Spectre_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214336',
      id: 67,
      name: 'Spectre',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213131',
      id: 20,
      name: 'Vengeful Spirit',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/20/Vengeful_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212927',
      id: 47,
      name: 'Viper',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Batrider_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220708',
      id: 65,
      name: 'Batrider',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3c/Dark_Willow_icon.png/revision/latest/scale-to-width-down/256?cb=20180831204518',
      id: 119,
      name: 'Dark Willow',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Death_Prophet_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220408',
      id: 43,
      name: 'Death Prophet',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bb/Lich_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215954',
      id: 31,
      name: 'Lich',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Oracle_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215824',
      id: 111,
      name: 'Oracle',
      desc: 'description template',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8a/Rubick_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215614',
      id: 86,
      name: 'Rubick',
      desc: 'description template',
    },
  ])
  //все объекты вынеси в отдельные файлы, а карточку отдельно, сейчас дублируется код постоянно

  return (
    <LinearGradient
      colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']}
      style={styles.linearGradient}
    >
      <View style={styles.background}>
        <FlatList
          data={heroData}
          keyExtractor={(data) => data.id}
          renderItem={(data) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HeroInfo', {
                  id: data.item.id,
                  name: data.item.name,
                  img: data.item.img,
                  desc: data.item.desc,
                })
              }
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
                  borderColor: '#212F3D',
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
                    textShadowRadius: 2,
                    fontFamily: 'Open Sans',
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
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#a22511',
    flex: 1,
  },

  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
  },
  modalImage: {
    width: 170,
    height: 100,
    alignSelf: 'center',
    borderRadius: 2,
  },
  modalDesc: {
    fontSize: 14,
    fontFamily: 'Open Sans',
  },
  modalBack: {
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
  },
})
