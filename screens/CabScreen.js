import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'

const Cabs = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://i.ibb.co/5rmhLcw/cab12.jpg' }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 100,
        }}
      />
      <Text style={{ fontFamily: 'Open Sans' }}>
        Позже тут будет кабачковая галерея🍆🍆🍆
      </Text>
    </View>
  )
}

export default Cabs
