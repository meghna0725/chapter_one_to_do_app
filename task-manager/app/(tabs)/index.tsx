import { Text, StyleSheet, View } from 'react-native';
import AddTask from '../../components/Task';
import TaskView from '../../components/TaskView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Management</Text>
      <AddTask/>
      <TaskView></TaskView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});
