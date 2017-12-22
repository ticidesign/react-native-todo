import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { styles } from './styles';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput 
      placeholder='Add to the todo list' 
      value={props.value}
      onChangeText={props.handleChange}
      style={styles.input}
    />
    <TouchableOpacity 
      onPress={props.handlePress}
      style={styles.button}
    >
      <Text style={styles.text}>ADD ITEM</Text>
    </TouchableOpacity>
  </View>
)