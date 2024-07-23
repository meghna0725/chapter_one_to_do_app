import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AddTask from '../../components/Task'; // Adjust the import path as needed
import TaskView from '../../components/TaskView'; // Adjust the import path as needed

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ taskName: string; taskDescription: string; completed: boolean }[]>([]);

  const handleAddTask = (task: { taskName: string; taskDescription: string; completed: boolean }) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Management System</Text>
      <AddTask onAddTask={handleAddTask} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TaskView tasks={tasks} setTasks={setTasks} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightblue',
  },
  scrollContainer: {
    flexGrow: 1,
    overflow: 'scroll',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default App;
