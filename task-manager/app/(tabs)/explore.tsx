import { Text, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

export default function Explore() {

  // get recent deadlines
  const findDueNextWeek = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>

      <Text>10 tasks To Do</Text>
      <Text>10 tasks In Progress</Text>
      <Text>10 tasks Completed</Text>
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
