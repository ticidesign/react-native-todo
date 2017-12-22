import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { TodoForm } from './TodoForm';
import { connect } from 'react-redux';
import { styles } from './styles';

export class _Todo extends Component {
  static defaultProps = {
    todos: []
  }
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }
  
  handleChange(text) {
    this.setState({newTodo: text});
  }
  
  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }

  // removeTodo(i){
  //   const todos = [...this.state.todos.slice(0, i), this.state.todos.slice(i + 1)];
  //   this.setState({todos});
  // }
  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>Todo List</Text>
          <Text style={styles.subtitle}>Get things done, one item at a time.</Text>
        </View>
        
        <View style={styles.todos}>
          {this.props.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText} >{todo}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subtitle}>Add to the todo list</Text>
        <TodoForm
          handlePress={this.handlePress.bind(this)}
          handleChange={this.handleChange.bind(this)}
          value={this.state.newTodo}
        />

      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({type: 'CREATE_TODO' , payload: todo})
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);
