import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form'

const CustomInput = ({control, name, rules={}, placeholder, secureTextEntry, error}) => {
  return (
<Controller
control={control}
name={name}
rules={rules}
render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
    <>
    <View style={styles.container}>
<TextInput value={value}
 onChangeText={onChange} 
 onBlur={onBlur}
 placeholder={placeholder}
 style = {styles.input}
 secureTextEntry = {secureTextEntry}
 autoCorrect = {false}
 /> 
 </View>
 {error && (<Text style={{color: 'red', alignSelf: 'stretch'}}>Error</Text>)}
 </>
)} />
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    input: {
      paddingLeft: 2
    }
})

export default CustomInput


// {borderColor: error ? 'red' : '#e8e8e8'}