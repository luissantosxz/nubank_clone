import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {AntDesign} from "@expo/vector-icons"
import ActionButton from "../ActionButton";

export default props => (
    <ScrollView 
        style={estilo.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        <ActionButton icone="addfolder" texto="Entradas" />
        <ActionButton icone="tagso" texto="Compras" />
        <ActionButton icone="creditcard" texto="Carteira" />
        <ActionButton icone="barcode" texto="Boleto" />
        <ActionButton icone="setting" texto="Conta" />
        <ActionButton icone="minuscircleo" texto="Debito Aut." />
        <ActionButton icone="checkcircleo" texto="Pagamentos Feitos" />
    </ScrollView>
)


const estilo = StyleSheet.create({
    container: {
        height: 220,
        paddingStart: 14,
        paddingEnd: 14,
        marginTop: 18,
        marginBottom: 14
    }

})