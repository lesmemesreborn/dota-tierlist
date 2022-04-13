import { FontAwesome5 } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default function TierP({ navigation }) {
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Tinker_icon.png',
      id: 1034,
      name: 'Tinker',
      desc: '',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214233',
      id: 1063,
      name: 'Weaver',
      desc: '',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Outworld_Destroyer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220923',
      id: 1076,
      name: 'Outworld Devourer',
      desc: '',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Spirit_Breaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212138',
      id: 1071,
      name: 'Spirit Breaker',
      desc: '',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c3/Bane_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215925',
      id: 1003,
      name: 'Bane',
      desc: '',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Techies_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215855',
      id: 1105,
      name: 'Techies',
      desc: '',
    },
  ])
  const [modalWindow, setModalWindow] = useState(false)
  return (
    <LinearGradient
      colors={[
        '#FF0018',
        '#86007D',
      ]}
      style={styles.linearGradient}
    >
      <View>
        {/* <ImageBackground source={imagebg} resizeMode="cover" style={styles.image}> */}
        <FlatList
          data={heroData}
          keyExtractor={(data) => data.id}
          renderItem={(data) => (
            <>
              <Modal visible={modalWindow}>
                <View style={styles.modalView}>
                  <View>
                    <Text style={styles.modalTitle}>{data.item.name}</Text>
                    <Image
                      style={styles.modalImage}
                      source={{ uri: data.item.img }}
                    />
                    <Text style={styles.modalDesc}>{data.item.desc}</Text>
                    <FontAwesome5
                      style={styles.modalBack}
                      name='backspace'
                      size={48}
                      color='black'
                      onPress={() => setModalWindow(false)}
                    />
                  </View>
                </View>
              </Modal>

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
                    borderColor: 'transparent',
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
    backgroundColor: '#5DADE2',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#BB1B01',
    flex: 1,
  },

  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'Open Sans',
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
