import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}