import React,{useState} from "react";
import { View , Text, Button, TextInput} from "react-native";
import { useAuth } from "../api/auth/useAuth";


const InscriptionScript = ()=>{
    const {inscription} = useAuth();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();
  

    return(
        <View>
            <TextInput  value={email} placeholder="email" onChangeText={(email)=>{setEmail(email)}}/>
            <TextInput value={password} secureTextEntry={true} placeholder="mot de passe" onChangeText={(password)=>{setPassword(password)}}/>
            <TextInput value={username} placeholder="username" onChangeText={(username)=>{setUsername(username)}}/>
            <Button title="s'inscrire" onPress={()=>{inscription(username,email, password)}}/>
        </View>
    )
}
export default InscriptionScript;