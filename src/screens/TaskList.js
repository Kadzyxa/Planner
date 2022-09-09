import React from 'react'
import {Button, View} from "react-native";
import {TaskState} from "../TaskState";

export const TaskList = ({navigation}) => {
    return(
        <View>
            <Button title="ADD" onPress={navigation.navigate('AddTaskScreen', {})} />

        </View>
    )
}