import React, {useState, useContext} from 'react';
import {View, StyleSheet, useWindowDimensions, TextInput, Textarea, Input, Button, Text, Image, Dimensions } from 'react-native'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'



const SignInScreen = () => {
const navigation = useNavigation()

const { control, 
    handleSubmit, 
formState: {errors} } = useForm({defaultValue: {
    username: 'Default username',
},
})

console.log(errors)

   const onSignInPressed = (data) => {
       console.warn('Скоро будет доступно')

   }
   
   
   const onForgotPasswordPressed = () => {
    console.warn('Такого экрана ещё нет')
}
const onRegister = () => {
    navigation.navigate('RegisterScreen')
}
const onGuest = () => {
    navigation.navigate('Index')
}

    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://i.ibb.co/M6mRbL2/Logo1.png'}} style = {styles.logo} />
        <Text style={styles.text}>Добро пожаловать</Text>
        <CustomInput 
        name="username"
        placeholder="Username"
        control={control}
        rules={{required: 'Введите имя пользователя', minLength: {value: 3, message: 'Min 3 characters'}}}
        />
        <CustomInput 
        name='password'
        placeholder="Password"
        secureTextEntry = {true}
        control={control}
        rules={{required: 'Введите пароль', minLength: {value: 3, message: 'Min 3 characters'}}}/>
 
        <CustomButton text="Войти" onPress={handleSubmit(onSignInPressed)}/>
        <CustomButton text="Зарегистрироваться" onPress={onRegister}/>
        <CustomButton text="Забыли пароль?" onPress={onForgotPasswordPressed}/>
        <CustomButton text="Войти как гость" onPress={onGuest}/>
        </View>
    )
    }


const styles = StyleSheet.create({
    container: {
        borderColor: '#51BCF3',
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#51BCF3',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 5
    },
    logo: {
        width: Dimensions.get('window').width - 400,
        height: Dimensions.get('window').height - 400, 
        marginBottom: 5
    }
    }
)

export default SignInScreen


