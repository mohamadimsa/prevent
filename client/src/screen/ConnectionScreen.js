import React ,{useEffect}from "react";
import { View , Text, Button} from "react-native";
import { useSelector } from "react-redux";
import{getUser,isAUth} from "../../src/redux/selectors";
import { useAuth } from "../api/auth/useAuth";

const ConnectionScreen = ({navigation})=>{
   const error = useSelector(getUser)
   const Auth = useSelector(isAUth)
   const {authentification} = useAuth();
   console.log('l utilisateur est authentifier : '+Auth);
   useEffect(() => {
     authentification('petubrt@gmail.com','mohamadiMsa');
   }, [])
    return(
        <View>
            <Text>screen connection moh</Text>
            <Button title='cree un compte' onPress={()=>navigation.push("inscription")}></Button>
        </View>
    )
}
export default ConnectionScreen;