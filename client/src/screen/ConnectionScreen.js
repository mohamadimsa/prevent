import React ,{useEffect}from "react";
import { View , Text, Button} from "react-native";
import { useSelector } from "react-redux";
import{error,isAUth} from "../../src/redux/selectors";
import { useAuth } from "../api/auth/useAuth";

const ConnectionScreen = ({navigation})=>{
   const e = useSelector(error)
   const Auth = useSelector(isAUth)
   const {authentification} = useAuth();
   console.log('l utilisateur est authentifier : '+Auth);
   

    return(
        <View>
            <Text>screen connection moh</Text>
            <Button title='se connecter' onPress={()=>authentification('tnifasshouda@gmail.com','houda123')}></Button>
            <Button title='inscription' onPress={()=>navigation.navigate('inscription')}></Button>
        </View>
    )
}
export default ConnectionScreen;