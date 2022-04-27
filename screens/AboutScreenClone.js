import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Avatar, ListItem} from '@react-native-material/core'

const AboutScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.body}>
        <View>
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/VCK21Fx/ss.png' }} />
            }
            title='Tier SS+'
            secondaryText='Наиболее сильные и выбивающиеся из баланса герои'
            onPress={() => navigation.navigate('TierSS')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/NNyQx60/S.png' }} />
            }
            title='Tier S'
            secondaryText='Очевидно сильные герои, подходящие для успешного поднятия ммр'
            onPress={() => navigation.navigate('TierS')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/2tBm2kd/a1.png' }} />
            }
            title='Tier A'
            secondaryText='Достаточно сильные герои в нынешнем патче'
            onPress={() => navigation.navigate('TierA')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/0QSWw2Y/B.png' }} />
            }
            title='Tier B'
            secondaryText='Средние, сбалансированные герои с примерным винрейтом в 50%'
            onPress={() => navigation.navigate('TierB')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/ZfDxNDP/C.png' }} />
            }
            title='Tier С'
            secondaryText='Либо очень нишевые, либо всё же не самые сильные персонажи в этой мете'
            onPress={() => navigation.navigate('TierC')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/60L6zfq/D.png' }} />
            }
            title='Tier D'
            secondaryText='Слабые герои, не советую пикать'
            onPress={() => navigation.navigate('TierD')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/8j10d9w/G.png' }} />
            }
            title='Tier G'
            secondaryText='Название тира говорит само за себя...'
            onPress={() => navigation.navigate('TierG')}
          />
          <ListItem
            leadingMode='avatar'
            leading={
              <Avatar image={{ uri: 'https://i.ibb.co/4MVVr7G/3.png' }} />
            }
            title='О проекте'
            secondaryText='Для версии 7.30e'
            onPress={() => navigation.navigate('AboutScreen')}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#af3118',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    color: '#000000',
    fontSize: 32,
    fontStyle: 'italic',
    margin: 10,
    fontFamily: 'Open Sans',
  },
  text_about: {
    color: '#000000',
    fontSize: 16,
    fontStyle: 'italic',
    margin: 10,
    fontFamily: 'Open Sans',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#af3118',
  },
})

export default AboutScreen
