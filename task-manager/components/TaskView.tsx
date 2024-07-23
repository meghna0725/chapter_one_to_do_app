import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskProp {
  taskName: string;
  taskDescription: string;
  completed: boolean;
}

interface TaskViewProps {
  tasks: TaskProp[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProp[]>>;
}

const TaskView: React.FC<TaskViewProps> = ({ tasks, setTasks }) => {
  const handleDelete = (index: number) => {
    const taskName = tasks[index].taskName;
    setTasks(tasks.filter((_, i) => i !== index));
    Alert.alert('Task Deleted', `${taskName} has been deleted.`);
  };

  const handleCheckboxPress = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    if (updatedTasks[index].completed) {
      Alert.alert('Task Completed', `${updatedTasks[index].taskName} has been marked as completed.`);
    }
  };

  return (
    <>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskBox}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskName}>{task.taskName}</Text>
            <View style={styles.taskActions}>
              <CheckBox
                containerStyle={styles.checkboxContainer}
                center
                checked={task.completed}
                onPress={() => handleCheckboxPress(index)}
              />
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.taskDescription}>{task.taskDescription}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  taskBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 2, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', 
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, 
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 10, 
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginRight: 10,
  },
});

export default TaskView;
