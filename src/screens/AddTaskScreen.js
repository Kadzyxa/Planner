import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Button} from "react-native";
import {TaskState} from "../TaskState";

export const AddTaskScreen = ({navigation}) => {

    const [text, setText] = useState()
    const state = new TaskState()

    return(
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                placeholder="Enter name of the task"
                value={text}
                onChangeText={(text) => setText(text) }
                />
            <Button title="Add" onPress={state.addTask(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        paddingTop: 10
    },
    input: {
        height: 30,
        width: '90%',
        borderBottomWidth: 3,
        borderBottomColor: 'blue',
        backgroundColor: 'lightgray',
        margin: 10,
        padding: 3
    }
})