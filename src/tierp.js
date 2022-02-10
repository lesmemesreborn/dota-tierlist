import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal, StyleSheet,
  Text, TouchableOpacity, View, 
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient'


export default function TierP( {navigation}) {
  
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Tinker_icon.png',
      id: 1034,
      name: 'Tinker',
      desc: 'Ебучий герой говна. Нахуй тревела, нахуй мозги, жми q-w-шива-реарм и соси хуй дальше. Чё хуесос, 6к апнул на тинкере? А если он в бане, че как на паджике 0-20 бегать?)) хуесос лсный, если пикаешь тинкера, выйди в окно нахуй, хуесос.'
    },
    {
        img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214233',
        id: 1063,
        name: 'Weaver',
        desc: 'Шушушушушушушу, посмотрите на меня, я выблядок с бессмертными жуками и триллионом урона на лейн-стадии)) как вам такое блять, хуесосы???'
      },
      {
        img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Outworld_Destroyer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220923',
        id: 1076,
        name: 'Outworld Devourer',
        desc: 'ЫЫЫЫЫЫЫ, астрал+метеор, ЫЫЫЫЫЫЫЫ, ОД не имба, ыЫЫЫЫЫЫ, хуле БКБ не покупаете ЫЫЫЫЫЫ, а бля у меня метеор на шестой, а бкб 4к стоит? ЫЫЫЫЫЫЫЫЫ посмотрите на меня я сильный игрок научился метеор в астрал давать, а вы хуета лсная ЫЫЫЫЫ'
      },
      {
        img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Spirit_Breaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212138',
        id: 1071,
        name: 'Spirit Breaker',
        desc: 'Нажал чардж - побежал к своему парню.'
      },
      {
        img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c3/Bane_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215925',
        id: 1003,
        name: 'Bane',
        desc: 'Сосёт хп так, как ты хуй у своего парня'
      },
      {
        img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Techies_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215855',
        id: 1105,
        name: 'Techies',
        desc: 'Улучшаем комьюнити))) теперь это ЛГБТ-комьюнити))) Слава пидорасам)))'
      },

  ]);
  const [modalWindow, setModalWindow] = useState(false)
  return (
    <LinearGradient colors={['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']} style={styles.linearGradient}>
    <View>
       
        {/* <ImageBackground source={imagebg} resizeMode="cover" style={styles.image}> */}
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
                backgroundColor: 'transparent',
                paddingVertical: 10,
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 3,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
                borderColor: 'transparent'
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
           
      {/* </ImageBackground> */}
    
      
    </View>
 </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#5DADE2', 
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center" 
},
  modalView: {
    backgroundColor:'#BB1B01', 
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