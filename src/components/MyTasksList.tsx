import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { themes } from '../theme';



interface MyTasksListProps {
  themeName: 'dark' | 'light'; 
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ themeName, tasks, onLongPress, onPress }: MyTasksListProps) {

  const theme = themes[themeName]; 

  function FlatListHeaderComponent() {
    return (
      <View>
        <Text style={styles.header}>Minhas tasks</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    header: {
      color: `${theme.colors.secundary}`,
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: `${theme.task.done.primary}`,
      marginRight: 10
    },
    taskText: {
      color:`${theme.colors.secundary}`,
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: `${theme.task.done.secundary}`,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: `${theme.task.done.primary}`,
      marginRight: 10
    },
    taskTextDone: {
      color: `${theme.task.strikethrough}`,
      textDecorationLine: 'line-through'
    }
  })
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={item.done ? styles.taskButtonDone :  styles.taskButton}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text 
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

