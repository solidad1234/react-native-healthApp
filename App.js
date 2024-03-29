import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './Value';
import RingProcess from './RingProgress';


export default function App() {
  return (
    <View style={styles.container}>

      <RingProcess radius={130}/>
      
      <View style={styles.values}>

        <Value label = "Steps" value = "1219"/>

        <Value label = "Distance" value = "0,75 km"/>

        <Value label = "Flights climbed" value = "12"/>
      </View>
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 12,
  },
  
  values: {
    flexDirection: 'row', 
    gap: 85,
    rowGap: 25,
    flexWrap: 'wrap',
  },
  
});
