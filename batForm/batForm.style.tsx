
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contain: {        justifyContent: 'center',
       width:'100%'
    },
    containLogo: {
        alignSelf: 'flex-start',
    },
    containInput: {
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,
        gap:20
    },
    input: {
        width: 250,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    buttonEnviar: {
        width: 200,
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 10
    },
    batLogo: {
        width: 100,
        height: 100,
        resizeMode:'contain'
    }
});