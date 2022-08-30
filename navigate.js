import React from 'react'
import menu from './src/menu'
import pisos from './src/pisos'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name = 'menu'
                component={menu}
                options={{title: 'тест'}}/>
            <Stack.Screen 
                name = 'pisos'
                component={pisos}
                options={{title: 'тест2'}}/>
        </Stack.Navigator>
    </NavigationContainer>
}