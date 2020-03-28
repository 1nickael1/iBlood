import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Login() {
    return (
        <View style={styles.Container}>
            <View style={styles.Conteudo}>

                <View style={styles.Header}>
                    <Text style={styles.Logo}>iBlood</Text>
                    <Text style={styles.Subtitulo}>Doe vida doe sangue</Text>
                </View>
                <View style={styles.TextInput}>
                    <TextInput placeholder="Email" />
                </View>
                <View style={styles.TextInput}>
                    <TextInput placeholder="Senha" />
                </View>
                <View style={{ width: wp('60%') }}>
                    <Text style={{ textAlign: 'right', color: '#ff4800' }}>ESQUECEU A SENHA?</Text>
                </View>
                <TouchableOpacity style={styles.Botao}>
                    <Text style={styles.TextoBotao}>Fazer Login</Text>
                </TouchableOpacity>
                <Text>Não possui uma conta? <Text style={{ color: '#ff4800' }}>Crie uma conta</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Conteudo: {
        alignItems: 'center',
    },
    Logo: {
        fontSize: wp('10%'),
        color: '#ff4800',
    },
    Subtitulo: {
        opacity: 0.4,
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('20%')
    },
    TextInput: {
        borderColor: '#999',
        borderRadius: wp('2%'),
        borderWidth: wp('0.5%'),
        height: hp('5%'),
        width: wp('60%'),
        marginVertical: hp('2%'),
    },
    Botao: {
        backgroundColor: '#ff4800',
        width: wp('60%'),
        height: hp('6%'),
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('2%'),
        elevation: 5,
    },
    TextoBotao: {
        color: '#FFF',
        fontSize: wp('5%'),
        fontWeight: 'bold'
    }
})