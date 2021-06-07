import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { themes } from '../theme';

interface TodoInputProps {
  addTask: (task: string) => void;
  themeName: 'dark' | 'light'; 
}

export function TodoInput({ addTask, themeName }: TodoInputProps) {

  const theme = themes[themeName]; 

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: `${theme.search.input.background}`,
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: `${theme.search.input.background}`,
    color: `${theme.search.input.color}`,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: `${theme.shadow.color}`,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: `${theme.search.button.background}`,
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});



  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task)
    setTask(''); 
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme.search.input.placeholder}
        returnKeyType="send"
        onChangeText={e => setTask(e)}
        onSubmitEditing={() => handleAddNewTask()}
        value={task}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={() => handleAddNewTask()}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}
