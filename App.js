import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src';
import TierSS from './src/tierss';
import TierS from './src/tiers';
import TierA from './src/tiera';
import TierB from './src/tierb';
import TierC from './src/tierc';
import TierD from './src/tierd';
import TierG from './src/tierg';
import AboutScreen from './src/aboutScreen';
import heroInfo from './src/heroInfoScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
     name="Index"
     component={IndexScreen}
     options={({ navigation }) => ({
         headerTitle: 'Dota 2 hero tierlist (7.30e)',
         headerStyle: {
          backgroundColor: '#CD6155',
        },
     })}

/>
<Stack.Screen
name="TierSS"
component={TierSS} 
options={({ navigation }) => ({
  headerTitle: 'Tier SS+ heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierS"
component={TierS} 
options={({ navigation }) => ({
  headerTitle: 'Tier S heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierA"
component={TierA} 
options={({ navigation }) => ({
  headerTitle: 'Tier A heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierB"
component={TierB} 
options={({ navigation }) => ({
  headerTitle: 'Tier B heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierC"
component={TierC} 
options={({ navigation }) => ({
  headerTitle: 'Tier C heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierD"
component={TierD} 
options={({ navigation }) => ({
  headerTitle: 'Tier D heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="TierG"
component={TierG} 
options={({ navigation }) => ({
  headerTitle: 'Tier G heroes (7.30e)',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="AboutScreen"
component={AboutScreen} 
options={({ navigation }) => ({
  headerTitle: 'О приложении',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>
<Stack.Screen
name="HeroInfo"
component={heroInfo} 
options={({ navigation }) => ({
  headerTitle: 'Hero Information',
  headerStyle: {
   backgroundColor: '#A31C04',
 },
})}
/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App