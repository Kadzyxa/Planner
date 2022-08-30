import React from 'react';
import { Text, Button, View } from 'react-native';

const Cat = ({navigation}) => {
    const loadzhops = () => {
        navigation.navigate('pisos')
      }
  return (
    <View>
    <Text>Hello, I am your cat!</Text>
    <Button title='открыть жопу' onPress={loadzhops}/>
    </View>
  );
}

export default Cat;