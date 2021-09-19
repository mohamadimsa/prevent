import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { token, isAUth } from "../../src/redux/selectors";
import { useAuth } from "../api/auth/useAuth";

const ConnectionScreen = ({ navigation }) => {
    const e = useSelector(token)
    const Auth = useSelector(isAUth)
    const { authentification } = useAuth();
    console.log('l utilisateur est authentifier : ' + Auth);
    console.log(e)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View>
            <TextInput value={email} placeholder="email" onChangeText={(email) => { setEmail(email) }} />
            <TextInput value={password} secureTextEntry={true} placeholder="password" onChangeText={(password) => setPassword(password)} />
            <Button title='se connecter' onPress={() => authentification(email, password)}></Button>
            <Button title='inscription' onPress={() => navigation.navigate('inscription')}></Button>
        </View>
    )
}
export default ConnectionScreen;