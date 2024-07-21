import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';

interface AddTaskProps {
  onAddTask: (task: { taskName: string; taskDescription: string; completed: boolean }) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  return (
    <View>
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Add Task Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Task Name"
              value={taskName}
              onChangeText={setTaskName}
            />
            <TextInput
              style={styles.input}
              placeholder="Task Description"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onAddTask({ taskName, taskDescription, completed });
                setModalVisible(false);
                setTaskName('');
                setTaskDescription('');
                setCompleted(false);
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  cancelButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxContainerStyle: {
    backgroundColor: 'transparent', // Transparent background
    borderWidth: 0, // Remove border
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default AddTask;
