import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import * as React from 'react'
import { useState } from 'react'
import AboutScreen from './screens/aboutScreen'
import Cabs from './screens/cabScreen'
import heroInfo from './screens/heroInfoScreen'
import IndexScreen from './screens/Index'
import TierA from './screens/Tiera'
import TierB from './screens/Tierb'
import TierC from './screens/Tierc'
import TierD from './screens/Tierd'
import TierG from './screens/Tierg'
import TierP from './screens/Tierp'
import TierS from './screens/Tiers'
import TierSS from './screens/Tierss'

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
          options={({ navigation }) => ({
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
          name='TierSS'
          component={TierSS}
          options={({ navigation }) => ({
            headerTitle: 'Tier SS+ heroes (7.30e)',
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
          name='TierS'
          component={TierS}
          options={({ navigation }) => ({
            headerTitle: 'Tier S heroes (7.30e)',
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
          name='TierA'
          component={TierA}
          options={({ navigation }) => ({
            headerTitle: 'Tier A heroes (7.30e)',
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
          name='TierB'
          component={TierB}
          options={({ navigation }) => ({
            headerTitle: 'Tier B heroes (7.30e)',
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
          name='TierC'
          component={TierC}
          options={({ navigation }) => ({
            headerTitle: 'Tier C heroes (7.30e)',
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
          name='TierD'
          component={TierD}
          options={({ navigation }) => ({
            headerTitle: 'Tier D heroes (7.30e)',
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
          name='TierG'
          component={TierG}
          options={({ navigation }) => ({
            headerTitle: 'Tier G heroes (7.30e)',
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
