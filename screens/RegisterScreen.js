import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'


const RegisterScreen = () => {
   const {control, handleSubmit, watch} = useForm({defaultValue: {
       username: 'Default username',
   },
})
   const pwd = watch('password')
   const navigation = useNavigation()
 
const onRegisterPressed = () => {
    console.warn('Register')
}
 

    return (
        <View style={styles.container}>
        <Image source = {{uri: 'https://i.ibb.co/M6mRbL2/Logo1.png'}} style = {styles.logo} />
        <Text style={styles.text}>Введите данные регистрации:</Text>
        <CustomInput 
        name="username"
        control={control}
        placeholder="Username"
        rules={{required: 'Введите имя пользователя', minLength: {value: 3, message: 'Min 3 characters'}, maxLength: {value: 26, message: 'Max 26 characters'}}} />
         <CustomInput 
      name="email"
      control={control}
      placeholder="Email"
      rules={{required: 'Введите Email', minLength: {value: 3, message: 'Min 3 characters'}}} />
        <CustomInput 
         name="password"
         control={control}
         placeholder="Password"
         secureTextEntry
         rules={{required: 'Введите пароль', minLength: {value: 3, message: 'Min 3 characters'}}} />
         <CustomInput 
         name="password-repeat"
         control={control}
         placeholder="Repeat Password"
         secureTextEntry
         rules={{validate: value => value === pwd || 'Пароли не совпадают' }} />
        <CustomButton text="Register" onPress={onRegisterPressed}/>
        <Text style = {{fontSize: 8, fontStyle: 'italic'}}>Регистрируясь, вы принимаете блаблабла... да вообще, это тестовое приложение, камон. </Text>
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

export default RegisterScreen