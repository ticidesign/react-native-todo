import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Switch
} from 'react-native';
import { Reddit } from './Reddit';
import { styles } from './styles';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentWillMount() {
    fetch('http://192.168.140.35:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json()
    .then(todos => this.setState({todos})))
  }

  handleChange(text){
    this.setState({newTodo: text})
  }

  hanlePress(){
    fetch('http://192.168.140.35:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todo => {
      const todos = [todo, ...this.state.todos];
      this.setState({todos, newTodo: ''});
    })
  }

  removeTodo(i){
    const todos = [...this.state.todos.slice(0, i), this.state.todos.slice(i + 1)];
    this.setState({todos});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo List</Text>
          <Text style={styles.subtitle}>Get things done, one item at a time.</Text>
        </View>

        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View 
              key={i} 
              style={styles.todo}
              onPress={() => this.removeTodo.call(this, i)}
            >
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
        
        <Reddit />
        <Text style={styles.subtitle}>Add to the todo list</Text>

        <View style={styles.form}>
          <TextInput 
            placeholder='Add to the todo list' 
            onChangeText={this.handleChange.bind(this)} 
            value={this.state.newTodo}
            style={styles.input}
          />
          <TouchableOpacity 
            onPress={this.hanlePress.bind(this)}
            style={styles.button}
          >
            <Text style={styles.text}>ADD ITEM</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

