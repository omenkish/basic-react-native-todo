import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/add_todo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Go take a shower', key: '3' },
  ]);

  const pressHandler = (key) => setTodos(prevTodos => prevTodos.filter(todo => todo.key != key));

  const submitHandler = (text) => {
    if (text.length < 4) {
      return Alert.alert('OOPS!', 'Content must be at least 4 chars long', [
        {text: 'Understood', onPress: () => console.log('Alert closed')},
      ]);
    }
    setTodos(prevTodos => ([
      {text, key: Math.random().toString()},
      ...prevTodos,
      ]
    ));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} >
        <Header />
        <View style={styles.content} >
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content: {
    flex: 1,
    padding:40
  },

  list: {
    flex: 1,
    marginTop: 20,
  }
});
