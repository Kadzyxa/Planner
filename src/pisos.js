import React from 'react';
import { Text, Button, View } from 'react-native';

const Cat = ({navigation}) => {
    const loadzhops = () => {
        navigation.goBack()
      }
     // <Button title='открыть жопу' onPress={loadzhops}/>
  return (
    <View>
    <Text>Hello, I am your cat!</Text>
    
    </View>
  );
}

export default Cat;