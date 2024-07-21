import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
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
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.tableTitle}>Name</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>Details</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>Status</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>Actions</DataTable.Title>
      </DataTable.Header>
      {tasks.map((task, index) => (
        <DataTable.Row key={index} style={styles.row}>
          <DataTable.Cell style={styles.cell}>
            <Text style={styles.text}>{task.taskName}</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.cell}>
            <Text style={styles.text}>{task.taskDescription}</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.cell}>
            <CheckBox
              containerStyle={styles.checkboxContainer}
              center
              checked={task.completed}
              onPress={() => {
                const updatedTasks = [...tasks];
                updatedTasks[index].completed = !updatedTasks[index].completed;
                setTasks(updatedTasks);
              }}
            />
          </DataTable.Cell>
          <DataTable.Cell style={styles.cell}>
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  tableTitle: {
    flex: 1,
    alignItems: 'flex-start',
  },
  row: {
    height: 'auto', 
    justifyContent: 'center',
    paddingTop: 12,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    flexWrap: 'wrap',
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: 'transparent', 
    borderWidth: 0, 
  },
});

export default TaskView;
