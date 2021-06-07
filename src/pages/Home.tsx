import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { themes } from '../theme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}
type themeProps = "light" | "dark"
export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<themeProps>("light")


function handleTheme() {
  setTheme(previous => previous == "light" ? "dark" : "light")
}
  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle == "")
      return; 
    setTasks(previous => [...previous,  {
      id: new Date().getTime(),
      done: false, 
      title: newTaskTitle
    }])

  }

  function handleMarkTaskAsDone(id: number) {
    setTasks( previous => previous.map(t => t.id === id ? Object.assign(t, t.done = !t.done) : t));
  }

  function handleRemoveTask(id: number) {
    setTasks(previous => previous.filter(t => t.id !== id )); 
  }

  return (
    <>
    <View style={{backgroundColor: themes[theme].backgrounds.primary, flex:1}}>

      <Header themeName={theme} onPress={() => handleTheme()}/>

      <TodoInput addTask={handleAddTask} themeName={theme} />

      <MyTasksList 
        tasks={tasks} 
        themeName={theme}
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        />
    </View>
    </>
  )
}