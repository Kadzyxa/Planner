import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export const Todo = ({todo, onRemove}) => {

    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
            <Ionicons style={styles.icon} name="close-outline" size={25} onPress={()=>onRemove(todo.id)} />
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center', 
        padding:15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        marginBottom: 10,
        //Shadow for iOS
        shadowOffset: {
            width: -2,
            height: 5,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        //Shadow for Android
        elevation: 5,
        shadowColor: 'blue',
        
    },
    icon: {
        alignContent: 'flex-end',
    }
})