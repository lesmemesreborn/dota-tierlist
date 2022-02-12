import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function TierA({ navigation }) {
  const [heroData] = useState([
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Io_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210451',
      id: 91,
      name: 'Io',
      desc: 'Висп крайне силён в соревновательной доте, на хайммр тоже очень мощный герой, но в S-тир нельзя его запихнуть из-за лоуптс-пабликов, там висп, может, и силён, но зависимость от кора всё же есть. Играть виспом в качестве кора на лоуптс тоже никто не умеет, да и не так он силён, каким был раньше, в славные времена Ana из OG.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mars_icon.png/revision/latest/scale-to-width-down/256?cb=20190401094550',
      id: 129,
      name: 'Mars',
      desc: 'Сильный командный персонаж, имеющий при себе стан (а с шардом и двойной стан), аое-замедление с критом, выживаемость от Bulwark и КРАЙНЕ сильной в этом патче ультой, в которую можно засунуть макропиру, ульт бабки, блэкхол, даже небо, даже Ал...химика первый спелл. Всё, что угодно, отличный геймчендж-ульт.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Wraith_King_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211746',
      id: 42,
      name: 'Wraith King',
      desc: 'Герой, который живёт дважды. Если думаете, что это слабо - убейте его на 60 минуте. Хотя бы раз. От маны после 20 минуты перестаёт быть зависимым, пуш-потенциал и гарантированные криты - это сильно. На лейнинге всё ещё не особо силён, но перестал быть крипом. Высоко рейтится как на лоуптс, так и в продоте, закрывая героев, зависящих от одной кнопки (которые сейчас в мете)',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f7/Enigma_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220156',
      id: 33,
      name: 'Enigma',
      desc: 'Всегда был довольно сильным героем. Что имеем: \n - Хороший лейнинг (ест рендж крипа, меняя направление линии); \n - Лютейший ульт, который надо уметь давать; \n - Очень сильный ковёр. \n Вообще, нужно сказать, что Энигма очень сильным героем был всегда, но скиллозависимым и закрываемым как минимум Сайленсером. Однако же, его вполне можно спамить на 3 поз (только не фп)',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d6/Lycan_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212224',
      id: 77,
      name: 'Lycan',
      desc: 'Третья позиция в прямых руках жрёт сначала вражеских героев, а потом и вражеский трон. Плюс есть аганим, который просто неистово усиливает твоего кора. Много урона у Ликана, сильный герой, но в соло не вывозит, команда тоже темповать должна.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Naga_Siren_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213513',
      id: 89,
      name: 'Naga Siren',
      desc: 'Кор крайне сильный, но нишевый. Забанить лес - нага задушена. Сбить тайминги на пару минут - нага почти задушена. Плюс требует неплохого микроконтроля для реализации героя на 100%. Однако, в прямых руках это СЛИШКОМ страшный герой, в особенности при игре 4+1',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Drow_Ranger_icon.png/revision/latest/scale-to-width-down/256?cb=20190325143546',
      id: 6,
      name: 'Drow Ranger',
      desc: 'Близкий к S-тиру герой. Очень много урона без шмоток, АоЕ-сайленс, мощные статы. Дровка пикается очень часто сейчас, и это не только из-за арканы, так шо пикайте имбу, пока не пофиксили.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7b/Monkey_King_icon.png/revision/latest/scale-to-width-down/256?cb=20161222035035',
      id: 114,
      name: 'Monkey King',
      desc: 'Хороший флекс (1-2-4 поз), больно бьёт без предметов, с предметами тоже сильный. Имеет очень сложный в исполнении, но крайне сильный додж. Хороший персонаж, но требует очень наглого мышления и какого-никакого понимания игры',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1a/Elder_Titan_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210922',
      id: 103,
      name: 'Elder Titan',
      desc: 'Контра абсолютно любому керри-ловкачу (режет резисты в ноль), имеет абилки, полезные как в начале игры, так и в гиперлейте. Ростик999 на нём в помойку отправляет чемпионов инта, чем вы хуже?',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png/revision/latest/scale-to-width-down/256?cb=20191127043227',
      id: 128,
      name: 'Snapfire',
      desc: 'Бабушка хорошо смотрится на саппорт-позиции: урон с первого и урон+стан со второго скилла - это сильно. Ульт тоже хороший, с кучей урона по области. А вот ещё можно её и в кор-позицию брать: сначала максим 3 спелл, берём предметы на дамаг и на 20 лвле качаем талант на урон к 3 спеллу. В итоге это выглядит прям очень страшно.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Tidehunter_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211651',
      id: 29,
      name: 'Tidehunter',
      desc: 'Очень... живучий герой, крайне живучий, я бы сказал. Имеет зависимость от кнопки ульты, но физического урона вносит много. Держать тайда в контроле смысла нет, а под его ульт можно раздавать кучу других кнопок (например, катаклизм). Полезность 10 из 10',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Phantom_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214013',
      id: 44,
      name: 'Phantom Assassin',
      desc: 'Классический райтклик-керри, имеющий в лейте триллионы урона с критов, а ',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/35/Lina_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215059',
      id: 25,
      name: 'Lina',
      desc: 'Лина - это практический идеальный пример симбиоза райткликера и кастера. Сначала много урона с магии, потом ещё больше урона с руки. Такой огневой потенциал делает Лину очень тонким героем, но далеко не каждый успеет опустить её хп в ноль до отлёта в таверну.',
    },
    {
      img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Storm_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214914',
      id: 17,
      name: 'Storm Spirit',
      desc: 'Крайне мобильный герой с очень большим количеством урона и контроля. Контрится сбитием таймингов, но рукастый шторм всё равно своё выфармит и доставит немало проблем.',
    },
  ])

  return (
    <LinearGradient
      colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']}
      style={styles.linearGradient}
    >
      <View>
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
    backgroundColor: '#5DADE2',
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
