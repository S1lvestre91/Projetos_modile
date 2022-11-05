import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./result";
import styles from "./style";


export default function Form(){
    const [alt, setAlt] = useState(null)
    const [peso, setPes] = useState(null)
    const [msg, setMsg] = useState("Preencha os campos")
    const [imc, setImc] = useState(null)
    const [txtbotton, setTxtBotton] = useState("Calcular")
    
    
    function imcCalcular(){
        return setImc((peso/(alt*alt)).toFixed(2))
    }
    function validaImc(){
        if(alt != null && peso != null){
            imcCalcular()
            setAlt(null)
            setPes(null)
            setMsg(`IMC: `)
            setTxtBotton("Calcular Novamente")
            return
        }
        setImc(null)
        setTxtBotton("Calcular")
        setMsg("Preencha os campos")
    }

    return(
        <View style={styles.formContext}>
           <View >
                <Text>Altura</Text>
                <TextInput  onChangeText={setAlt} value={alt} placeholder="Ex. 1.75" keyboardType="numeric" maxLength={4}></TextInput>
                <Text >Peso</Text>
                <TextInput  onChangeText={setPes} value={peso} placeholder="Ex. 70.75" keyboardType="numeric" maxLength={5}></TextInput>
                <Button onPress={() => validaImc()} title={txtbotton}></Button>
            </View> 
            <ResultImc  resImc={imc} msgImc={msg}/>
        </View>
    );
}
