import { LinearGradient } from 'expo-linear-gradient'
import * as React from 'react'
import { ScrollView } from 'react-native'
import { Card, Title } from 'react-native-paper'
// import HeroBase from './HeroBase'
import heroData from '../heroes'
// import TierP from './Tierp'


const IndexScreen = ({ navigation, route }) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#154360', '#1F618D', '#2980B9', '#5DADE2']}
        style={styles.linearGradient}
      >
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'SSS'),
              headerTitle: 'Tier SS+ heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/jT6grZV/sss.png' }}
            />

            <Title style={styles.title}>TIER SS+</Title>
          </Card.Content>
        </Card>

        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'S'),
              headerTitle: 'Tier S heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/Pr46Qvq/s1.png' }}
            />
            <Title style={styles.title}>TIER S</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'A'),
              headerTitle: 'Tier A heroes',
            })
          }
        >
          
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/NthfY6q/a2.png' }}
            />
            <Title style={styles.title}>TIER A</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'B'),
              headerTitle: 'Tier B heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/vHXcDv3/b1.png' }}
            />
            <Title style={styles.title}>TIER B</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'C'),
              headerTitle: 'Tier C heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/DtBLKmj/c1.png' }}
            />
            <Title style={styles.title}>TIER C</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'D'),
              headerTitle: 'Tier D heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/cyy5jkj/d1.png' }}
            />
            <Title style={styles.title}>TIER D</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate('HeroesList', {
              heroes: heroData.filter((item) => item.tier === 'G'),
              headerTitle: 'Tier G heroes',
            })
          }
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/rZcsBpD/g1.png' }}
            />
            <Title style={styles.title}>TIER G</Title>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() => navigation.navigate('AboutScreen')}
        >
          <Card.Content style={styles.item}>
            <Card.Cover
              style={styles.body_cover}
              source={{ uri: 'https://i.ibb.co/0txy3F5/about2.png' }}
            />
            <Title lineBreakMode='clip' numberOfLines={1} style={styles.title}>
              О приложении
            </Title>
          </Card.Content>
        </Card>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = {
  body: {
    flex: 1,
    borderWidth: 1,
  },
  body_cover: {
    marginBottom: 5,
    width: 100,
    height: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  card: {
    backgroundColor: '#5DADE2',
    borderRadius: 0,
    borderWidth: 1,
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#2471A3',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 3,
    borderWidth: 1,
    height: 80,
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
    padding: 5,
    fontSize: 24,
    // fontFamily: 'Beaumarchais', пример подключения шрифтов подкюлчать везде
    fontFamily: 'Open Sans',
    // fontFamily: 'Karlo Cham',
    // fontSize: 16,
    width: 280,
    maxWidth: '100%',
    height: '90%',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textShadowColor: 'navy',
    textShadowRadius: 1,
  },
  // about_title: {
  //   alignSelf: 'flex-start',
  //   marginTop: 10,
  //   marginLeft: 5,
  //   padding: 5,
  //   fontSize: 32,
  //   width: 280,
  //   maxWidth: '100%',
  //   height: '90%',
  //   fontWeight: 'bold',
  //   textShadowColor: 'navy',
  //   textShadowRadius: 1,
  // },
  paragraph: {},
  linearGradient: {
    flex: 1,
  },
}

export default IndexScreen
