import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import * as React from 'react'
import { useState } from 'react'
import AboutScreen from './screens/AboutScreen'
import Cabs from './screens/CabScreen'
import heroBase from './screens/HeroBase'
import heroInfo from './screens/HeroInfoScreen'
import IndexScreen from './screens/Index'
import TierP from './screens/Tierp'

const Stack = createNativeStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    Beaumarchais: require('./assets/fonts/beaumarchaisc.ttf'),
    'Open Sans': require('./assets/fonts/open_sans.ttf'),
  })
} //подключение шрифтов

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={({ navigation, route }) => ({
            headerTitle: 'Dota 2 hero tierlist (7.30e)',
            headerStyle: {
              backgroundColor: '#85C1E9',
            },
            headerTintColor: 'navy',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />
        <Stack.Screen
          name='HeroesList'
          component={heroBase}
          options={({ route }) => ({
            headerTitle: route.params.headerTitle || 'Heroes List',
            headerStyle: {
              backgroundColor: '#85C1E9',
            },
            headerTintColor: 'navy',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />

        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
          options={({ navigation }) => ({
            headerTitle: 'О приложении',
            headerStyle: {
              backgroundColor: '#85C1E9',
            },
            headerTintColor: 'navy',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />
        <Stack.Screen
          name='HeroInfo'
          component={heroInfo}
          options={({ navigation }) => ({
            headerTitle: 'Hero Information',
            headerStyle: {
              backgroundColor: '#85C1E9',
            },
            headerTintColor: 'navy',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />
        <Stack.Screen
          name='CabScreen'
          component={Cabs}
          options={({ navigation }) => ({
            headerTitle: 'Ну и кабачок! 🍆',
            headerStyle: {
              backgroundColor: '#85C1E9',
            },
            headerTintColor: 'navy',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />
        <Stack.Screen
          name='TierP'
          component={TierP}
          options={({ navigation }) => ({
            headerTitle: 'Герои для пидорасов',
            headerStyle: {
              backgroundColor: '#FF0018',
            },
            headerTintColor: '#86007D',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 24,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
