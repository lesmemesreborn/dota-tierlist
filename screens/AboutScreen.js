import * as React from 'react'
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native'
import {Divider} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'

const AboutScreen = ({ navigation }) => (


  <>
    <LinearGradient
      colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']}
      style={styles.linearGradient}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>ЗДАРОВА, С ВАМИ СТАНИСЛАВ ХОРИНСКИЙ</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CabScreen')}>
          <Image
            style={styles.image_hurley}
            source={{
              uri: 'https://i.ibb.co/DYCRBYz/The-Definitive-Edition-2uz-M3s-optk-1369x770-7m22s.png',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{ fontStyle: 'italic', fontSize: 18, fontFamily: 'Open Sans' }}
        >
          Мой кореш сделал свой тирлист героев для дока трейда, чтобы можно было
          пикнуть отличного паренька (евпочя))). Герои <Text>SS+ тира</Text>{' '}
          откровенно сломанные и невероятно сильные, пикать обязательно. Герои{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'gold',
              fontFamily: 'Open Sans',
            }}
          >
            S тира
          </Text>{' '}
          просто сильные и актуальные почти в любом пике, в общем, отличные
          парни))) В{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'maroon',
              fontFamily: 'Open Sans',
            }}
          >
            тире А{' '}
          </Text>
          находятся просто сильные персы, на которых можно стабильно, хоть и
          медленно, но апать птсики. В{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'blue',
              fontFamily: 'Open Sans',
            }}
          >
            тире В
          </Text>{' '}
          находятся середнячки, в{' '}
          <Text style={{ fontWeight: 'bold', color: 'black' }}>тире C </Text> -
          персонажи, которые довольно слабые в этом патче, либо же очень
          ситуативные.{' '}
          <Text style={{ fontWeight: 'bold', color: '#A6ACAF' }}>Тир D</Text> -
          откровенно слабые герои, требующие апа, ну а{' '}
          <Text style={{ fontWeight: 'bold', color: '#6E2C00' }}>тир G(г)</Text>{' '}
          говорит сам за себя. Вот такие прикольчики))))))))))) Также есть ещё
          один скрытый тир но вам нужно очень постараться, чтобы его найти))
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontFamily: 'Open Sans',
          }}
        >
          Текущая версия игры:{' '}
          <Text style={{ fontWeight: 'bold', fontFamily: 'Open Sans' }}>
            7.30e
          </Text>
        </Text>
        <Divider />
        <TouchableOpacity onPress={() => navigation.navigate('TierP')}>
          <Text style={styles.text_hidden}>жми сюда</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontStyle: 'italic',
            marginTop: 10,
            fontSize: 10,
            fontFamily: 'Open Sans',
          }}
        >
          Да, прилага довольно сырая, стараюсь её улучшать как визуально, так и
          функционально. Планируется добавление тирлиста предметов, добавление
          оптимальных сборок на героев, добавление информации из API опендоты
          (кстати, с этим проблемы возникли, они требуют ключ доступа, а для его
          получения нужно вводить платёжные данные, чего мне не очень хочется, а
          с фейковых карт не работает), различные прикольчики тоже доступны
          будут, я думаю. Кстати, уже есть одна пасхалка специально для Нади,
          которую надо бы ей найти)){' '}
        </Text>
      </ScrollView>
    </LinearGradient>
  </>
)

const styles = {
  body: {
    flex: 1,
    borderWidth: 1,
  },
  body_cover: {
    marginBottom: 5,
    width: 75,
    height: 50,
    borderRadius: 2,
  },
  card: {
    backgroundColor: '#800000',
    borderRadius: 0,
    borderWidth: 1,
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#af3118',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 3,
    height: 80,
  },
  title: {
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    fontFamily: 'Open Sans',
    maxWidth: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  image_hurley: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    margin: 10,
    borderWidth: 2,
  },
  text_hidden: {
    color: '#2980B9',
    fontSize: 4,
    fontFamily: 'Open Sans',
  },
}

export default AboutScreen
