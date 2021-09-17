import React from "react";
import { View , Text, Button} from "react-native";

const ConnectionScreen = ({navigation})=>{
    return(
        <View>
            <Text>screen connection moh</Text>
            <Button title='cree un compte' onPress={()=>navigation.push("inscription")}></Button>
        </View>
    )
}
export default ConnectionScreen;