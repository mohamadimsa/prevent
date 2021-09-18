import React from "react";
import { View , Text, Button} from "react-native";
import { useAuth } from "../api/auth/useAuth";


const InscriptionScript = ()=>{
    const {inscription} = useAuth()
    return(
        <View>
            <Text>inscription</Text>
            <Button title="s'inscrire" onPress={()=>{inscription('houda1234','tnifasshouda@gmail.com','houda123')}}/>
        </View>
    )
}
export default InscriptionScript;