import { StyleSheet, Text, View } from 'react-native';

function Value({ label, value }) {
    return (


        <View style={styles.valueContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>

    );
}

   const styles = StyleSheet.create({
    valueContainer:{
        marginVertical: 15,
        //minWidth: '40%',
      },
    label: {
        color: '#fff',
        fontSize: 35,
      },
      value: {
        fontSize: 45,
        color: '#fff',
      },
   });

   export default Value;