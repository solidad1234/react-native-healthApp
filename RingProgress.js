import { View, Text } from "react-native"; 
import { Svg } from "react-native-svg";
import Circle from "react-native-svg";
import Rect from "react-native-svg";

function RingProcess({radius}){
    return (
        <View style ={{width: radius*2, height: radius*2, backgroundColor: '#d62d20',
         alignSelf: "center"}}>
            <Text style = {{color: 'white'}}>Ring Process</Text>
        </View>
    );
};

export default RingProcess;