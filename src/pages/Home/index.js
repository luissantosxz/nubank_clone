import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

import Lista from '../../data/MovementsList';

export default function Home(){
    return(
        <View style={estilo.container}>
            <Header name="Luís Fernando" />
            <Balance balance={5600.45} expenses={-243.39} />

            <Actions />

            <Text style={estilo.title}>Últimas movimentações</Text>
            
            <FlatList
                style={estilo.lista}
                data={Lista}
                keyExtractor={(item) => item.id}
                renderItem={({item})=><Movements data={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ececec"
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
})