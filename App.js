import React, {useState} from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { AddFolder } from './src/AddFolder'
import {Todo} from './src/Todo'
import {MainStack} from './navigate'


function App() {
  const [todos, setTodos] = useState([])
  const addFolder = (title) => {
    /*const newFolder = {
      id: Date.now().toString(),
      title: title,}*/

    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title: title,
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
    <AddFolder onSubmit={addFolder}/>
      <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({item})=>(<Todo todo={item} onRemove={removeTodo}/>)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 30
    }
})

export default App;