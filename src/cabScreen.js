import React, {useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
// import Cabachki from './cab/Cabachki';


//     function Cabs() {
//         const randomImage =
//           Cabachki[Math.floor(Math.random() *  Cabachki.length)];
//         console.log(randomImage);

//         return (
//             <View style={styles.cardContainer}>
//               <Image source={randomImage} style={{height: 200, width: 200}}/>
//             </View>
//           );
//         }
        
//         const styles = StyleSheet.create({
//           cardContainer: {
//             width: '50%',
//             height: '35%',
//             backgroundColor: 'pink',
//           },
//         });

const Cabs = () => {
  return (
    <View>
    <Image source={{uri: 'https://i.ibb.co/5rmhLcw/cab12.jpg'}} style={{width: 400, height: 700}}/>
    <Text>Позже тут будет кабачковая галерея🍆🍆🍆</Text>
    </View>
  )
}
        
        export default Cabs;