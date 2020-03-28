import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Page1() {
    return (
        <View style={styles.Container}>
            <Text>Pagina 1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
