import { StyleSheet, Text, View } from "react-native";

export default function Balance({balance, expenses}){
    return(
        <View style={estilo.container}>
            <View style={estilo.item}>
                <Text style={estilo.itemTitle}>Saldo</Text>
                <View style={estilo.content}>
                    <Text style={estilo.currencySymbol}>R$</Text>
                    <Text style={estilo.balance}>{balance.toFixed(2)}</Text>
                </View>
            </View>

            <View style={estilo.item}>
                <Text style={estilo.itemTitle}>Gastos</Text>
                <View style={estilo.content}>
                    <Text style={estilo.currencySymbol}>R$</Text>
                    <Text style={estilo.expenses}>{expenses.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        marginTop: -24,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle:{
        fontSize: 20,
        color: '#909090'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center', 
    },
    currencySymbol:{
        color: '#909090',
        marginRight: 6
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    },
})