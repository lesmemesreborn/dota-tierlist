import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import * as React from 'react'
import { useState } from 'react'
import Navigation from './components/navigation'


const Stack = createNativeStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    Beaumarchais: require('./assets/fonts/beaumarchaisc.ttf'),
    'Open Sans': require('./assets/fonts/open_sans.ttf'),
  })
} //подключение шрифтов 


const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

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
    <Navigation/>
  )}


export default App
