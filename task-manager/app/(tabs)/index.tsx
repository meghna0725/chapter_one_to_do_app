import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import AddTask from '../../components/Task';  // Adjust the import path as needed
import TaskView from '../../components/TaskView';  // Adjust the import path as needed

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ taskName: string; taskDescription: string; completed: boolean }[]>([]);

  const handleAddTask = (task: { taskName: string; taskDescription: string; completed: boolean }) => {
    setTasks([...tasks, task]);
  };

  const [viewUncompletedTasks, setViewUncompletedTasks] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Management</Text>
      <Button
        title="Show All"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Show Completed"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <AddTask onAddTask={handleAddTask} />
      <TaskView tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Center content at the top
    alignItems: 'center',
    padding: 20,  // Optional: Add some padding for better spacing
  },
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Bold font
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center align text
    width: '100%', // Full width to center text horizontally
    paddingTop: 55,
  },
});

export default App;
