import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'

const FavList = props => {
    return <View>
        <FlatList
        data={FavHeroes}
        keyExtractor={(item, index) => item.id}
        renderItem={renderHeroItem}
        style={{width: '100%'}}
        />
    </View>
}

const styles = StyleSheet.create({})

export default FavList