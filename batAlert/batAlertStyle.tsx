import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    logo: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        marginBottom: 20,
        resizeMode:'contain',
        width: 200,
        height: 200,
       
    },
    button: {
        width: 200,
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical:10
    }
    
    });
