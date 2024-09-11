import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";

const stastusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

import {Feather, FontAwesome} from '@expo/vector-icons'

export default function Header(props){
    return(
        <View style={estilo.container}>
            <View style={estilo.content}>
                <Text style={estilo.userName}>{props.name}</Text>
                <TouchableOpacity style={estilo.buttonUser}>
                    <Feather name='user' size={27} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor: '#8000FF',
        paddingTop: stastusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonUser:{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    },
    userName:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUserIcon:{
        color: '#fff'
    }
})