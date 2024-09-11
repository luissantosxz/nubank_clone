import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity
            style={estilo.container}
            onPress={() => setShowValue(!showValue)}
        >
            <Text style={estilo.date}>{data.date}</Text>
            <View style={estilo.content}>
                <Text style={estilo.label}>{data.label}</Text>
                {showValue ? (
                    <Text
                        style={data.type === 1 ? estilo.value : estilo.expenses}
                    >
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (
                    <View style={estilo.skeleton}></View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    container: {
        marginLeft: 14,
        marginRight: 14,
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"
    },
    date: {
        color: "#808080"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8
    },
    label: {
        fontWeight: "bold",
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: "bold"
    },
    expenses: {
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold"
    },
    skeleton: {
        marginTop: 6,
        width: 80, // width should be a number, not a string
        height: 10, // height should be a number, not a string
        backgroundColor: '#dadada',
        borderRadius: 8
    }
});
