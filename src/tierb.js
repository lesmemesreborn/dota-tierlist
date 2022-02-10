import React, { useState } from 'react';
import {
  Image, ImageBackground, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Background from './etc/back.png';
import {LinearGradient} from 'expo-linear-gradient'

export default function TierB({navigation}) {
  const imagebg =  Background
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Earthshaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205323',
      id: 7,
      name: 'Earthshaker',
      desc: 'Добротный герой на 4 позицию, имеющий просто кучу станов по области. Основная сила - эти самые станы и ульт, который уничтожает команду, стоящую впятером. Основная слабость - уже давно никто не стоит впятером.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215651',
      id: 87,
      name: 'Disruptor',
      desc: 'Неплохой герой 5 позиции с полезными кнопками. Проблема в том, что все эти кнопки надо уметь нажимать: тандер страйком надо бить так, чтобы не дамажить лайновых крипов, с глимпсом надо знать тайминг возвращения, а третьим скиллом и ультом надо попадать. Ну и в кор-позицию его не одеть никак, в принципе.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7b/Morphling_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212816',
      id: 10,
      name: 'Morphling',
      desc: 'Несправедливо поставленный сюда герой, можно сказать, НООООО: \n 1) В миде он перестал играться, слишком много нужно \n 2) Убить его стало всё же попроще. \n Несмотря на то, что для игры ему нужен один слот (Ethereal Blade), темп ему сбить довольно легко, да и убивать уже можно вполне успешно, благо, много чего уже хпреген режет.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Invoker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220849',
      id: 74,
      name: 'Invoker',
      desc: 'Хороший, толковый герой, как на мид, так и на 4 позицию, но всё же требует достаточно хорошего понимания игры и личного скилла. Пикать можно.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Doom_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212104',
      id: 69,
      name: 'Doom',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/91/Ember_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20170417182614',
      id: 106,
      name: 'Ember Spirit',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cc/Medusa_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214604',
      id: 94,
      name: 'Medusa',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/ff/Spectre_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214336',
      id: 67,
      name: 'Spectre',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Ursa_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213321',
      id: 70,
      name: 'Ursa',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/15/Night_Stalker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212027',
      id: 49,
      name: 'Night Stalker',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cb/Clinkz_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214114',
      id: 56,
      name: 'Clinkz',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Jakiro_icon.png/revision/latest/scale-to-width-down/256?cb=20170507134250',
      id: 64,
      name: 'Jakiro',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Ancient_Apparition_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220816',
      id: 68,
      name: 'Ancient Apparition',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ed/Centaur_Warrunner_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210603',
      id: 96,
      name: 'Centaur Warrunner',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d6/Dawnbreaker_icon.png/revision/latest/scale-to-width-down/256?cb=20210410124439',
      id: 135,
      name: 'Dawnbreaker',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Kunkka_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205729',
      id: 23,
      name: 'Kunkka',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Pudge_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211506',
      id: 14,
      name: 'Pudge',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/79/Sand_King_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211544',
      id: 16,
      name: 'Sand King',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7e/Slardar_icon.png/revision/latest/scale-to-width-down/256?cb=20161213040814',
      id: 28,
      name: 'Slardar',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Anti-Mage_icon.png/revision/latest/scale-to-width-down/256?cb=20200916215957',
      id: 1,
      name: 'Antimage',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Bounty_Hunter_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213244',
      id: 62,
      name: 'Bounty Hunter',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/12/Mirana_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212744',
      id: 9,
      name: 'Mirana',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4e/Pangolier_icon.png/revision/latest/scale-to-width-down/256?cb=20180831204401',
      id: 120,
      name: 'Pangolier',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/81/Phantom_Lancer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212849',
      id: 12,
      name: 'Phantom Lancer',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213131',
      id: 46,
      name: 'Templar Assassin',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f0/Troll_Warlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213539',
      id: 95,
      name: 'Troll Warlord',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Venomancer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213902',
      id: 40,
      name: 'Venomancer',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c5/Dark_Seer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220632',
      id: 55,
      name: 'Dark Seer',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Grimstroke_icon.png/revision/latest/scale-to-width-down/256?cb=20180831203927',
      id: 121,
      name: 'Grimstroke',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b8/Lion_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220032',
      id: 26,
      name: 'Lion',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Pugna_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220442',
      id: 45,
      name: 'Pugna',
      desc: 'description template'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bf/Skywrath_Mage_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215753',
      id: 101,
      name: 'Skywrath Mage',
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