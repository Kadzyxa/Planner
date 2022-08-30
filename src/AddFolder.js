import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'

export const AddFolder = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }
        else {
            //error
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText ={setValue}
            value={value}
            placeholder='Введите название папки'/>
            <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={pressHandler}>
            <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    button: {
        marginLeft: 10,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#eee',
        
    },
    text: {
        fontSize: 15,
        color: "black",
        //fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle : 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
})
