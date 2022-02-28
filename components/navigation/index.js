import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AboutScreen from '../../screens/AboutScreen'
import Cabs from '../../screens/CabScreen'
import heroBase from '../../screens/HeroBase'
import heroInfo from '../../screens/HeroInfoScreen'
import TierP from '../../screens/Tierp'
import SignInScreen from '../../screens/SignInScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import IndexScreen from '../../screens/Index'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='SignInScreen'> 
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
       <Stack.Screen
        name='SignInScreen'
        component={SignInScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default Navigation