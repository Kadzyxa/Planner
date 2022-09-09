import React from 'react'
import {Text, View, StyleSheet} from "react-native";

export const Header = () => {
    return(
        <View style={StyleSheet.create({
            backgroundColor: 'blue',
            height: 60,
            justifyContent: "flex-end",
            alignItems: "center"
        })}>
            <Text> HEADER </Text>
        </View>
    )
}