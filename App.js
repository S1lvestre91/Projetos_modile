import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/views/form';
import Title from './src/views/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>   
    </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#A9A9A9',
      paddingTop:80,
    }
})

