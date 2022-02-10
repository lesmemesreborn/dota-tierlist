import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import Background from './etc/back.png'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'

export default function TierS({navigation}) {
  const imagebg =  Background
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214233',
      id: 63,
      name: 'Weaver',
      desc: 'Очень флексовый герой, играющий на любой позиции. Чтобы убить жуков, нужно 2439684396862 ударов, а урона даже на начальных стадиях полно. Я уж не говорю, что это пермабан на всех турнирах, даже виспа обогнал в этом плане.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Outworld_Destroyer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220923',
      id: 76,
      name: 'Outworld Devourer',
      desc: 'Астрал+метеор. 0 iq gameplay. Лёгкий блинкаут после астрала и чистый урон, зависящий от маны - сейчас это слишком сильный герой. Да, есть возможность его закрывать различными БКБ, форсами и т.д., но метеор стоит копейки, и разогнаться герой может очень легко.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a1/Queen_of_Pain_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220334',
      id: 39,
      name: 'Queen of Pain',
      desc: 'Очень сильный мидер. Есть: \n - Много урона с прокаста; \n - Чистый урон с ульты; \n - Встроенная мобильность с блинка; \n - Cам блинк с шардом становится в пару раз сильнее. \n В общем, герой очень сильный, но до Тинкера не догягивает, хотя вполне неплохо стоит против него на линии и по игре.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/12/Marci_icon.png/revision/latest/scale-to-width-down/512?cb=20211029000514',
      id: 666,
      name: 'Marci',
      desc: 'Очевидно сломанная параша с высоким флексом (1-5 позиции). Есть баф, стан, мобильность + сильнейший ульт. Ждём нерфа.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Spirit_Breaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212138',
      id: 71,
      name: 'Spirit Breaker',
      desc: 'Идеальный герой для игры на 3-5 поз. Скрипт игры: дал чардж -> наливаешь пивас -> ультуешь -> делаешь глоток. Бульдоз с огромным статусрезистом даёт дополнительную выживаемость, а ещё можно нулики купить поржать.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c3/Bane_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215925',
      id: 3,
      name: 'Bane',
      desc: 'Работяга-подпивас? Держи Бэйна. Нажал кнопку R - успеваешь полтораху опрокинуть за время действия ульты. Полезный.'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213053',
      id: 35,
      name: 'Sniper',
      desc: 'Пыщ пыщ пыщ с 4396853978379328 метров. Очень много урона, сломанный третий спелл, позволяющий убивать героев ВООБЩЕ без предметов. А представь, что с предметами будет...'
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/99/Void_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20210413204208',
      id: 126,
      name: 'Void Spirit',
      desc: 'Крайне сильный герой, ещё Торонтыч на инте на нём OG резал. Куча урона и эскейпов, даже рутами тяжко его останавливать. Убивать можно, но сам по себе очень сильный герой, который залезает-таки в S-тир.'
    },
  ]);
  const [modalWindow, setModalWindow] = useState(false)
  return (
    <LinearGradient colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']} style={styles.linearGradient}>
    <View style={styles.background}>
      
       <FlatList
        data={heroData}
        keyExtractor={data => data.id}
        renderItem={(data) => (
          <>
          <Modal visible={modalWindow} >
            <View style={styles.modalView}>
            <View > 
            <Text style={styles.modalTitle}>{data.item.name}</Text>
            <Image style={styles.modalImage}
             source={{uri: data.item.img}}/>
            <Text style={styles.modalDesc}>{data.item.desc}</Text>
            <FontAwesome5 style={styles.modalBack} name="backspace" size={48} color="black" onPress={() => setModalWindow(false)} />
            </View>
            </View>  
              </Modal>

              <TouchableOpacity
            onPress={() => navigation.navigate ("HeroInfo", {id: data.item.id, name: data.item.name, img: data.item.img, desc:data.item.desc})}
          >
            <View
              style={{
                backgroundColor: '#2471A3',
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
          </>
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