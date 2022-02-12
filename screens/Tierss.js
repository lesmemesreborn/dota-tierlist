import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function TierSS({ navigation }) {
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Tinker_icon.png',
      id: 34,
      name: 'Tinker',
      desc: 'Абсолютно нечестный герой в нынешнем патче. Что при себе имеет: \n - Слишком большой урон с двух кнопок; \n - Меньшую зависимость от таймингов (травела теперь не нужны); \n - Сломанную матрицу, являющуюся кошмаром во плоти (максимум резиста к станам и урону, возможность блинковаться из-под периодического урона); \n - Аганим с АоЕ. \n - Слишком сильный герой в патче. Винрейт 55%+ на всех рейтингах, это жесть. ',
    },
  ])
  const [modalWindow, setModalWindow] = useState(false)
  return (
    <LinearGradient
      colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']}
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
