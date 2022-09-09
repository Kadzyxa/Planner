import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from './styles'

export const TaskItem = (props) => {
    return (
        <View style={styles.taskItem}>
            <Text>{props.taskName}</Text>
        </View>
    );
}