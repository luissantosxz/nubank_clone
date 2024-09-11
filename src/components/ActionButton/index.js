import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {AntDesign} from "@expo/vector-icons"

export default function({icone, texto}){
    return(
        <TouchableOpacity style={estilo.actionButton}>
            <View style={estilo.areaButton}>
                <AntDesign name={icone} size={26} color="#000" />
            </View>
            <Text style={estilo.labelButton}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    actionButton: {
        alignItems: "center",
        marginRight: 32
    },
    areaButton: {
        backgroundColor: "#ecf0f1",
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    labelButton:{
        marginTop: 4,
        textAlign: "center",
    }
})