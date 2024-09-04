import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import { BatForm } from '../batForm/batForm';

import batLogo from '../src/imgs/pngwing.com.png'

import { styles } from './batAlertStyle';

export function BatAlert() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const handleButtonClick = () => {
        setMostrarFormulario(true);
    };
    
   
     
  return (
    <View style={styles.container}>
      {!mostrarFormulario && (
        <View >
          <Image
            source={batLogo}
            style={styles.logo}
          />
          <Text
            style={styles.button}
            onPress={handleButtonClick}
             >Active bat sinal</Text>
        </View>
      )}
      {mostrarFormulario && (
        <BatForm/>
      )}
    </View>
  )}