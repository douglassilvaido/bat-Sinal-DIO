import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';
import batLogo from '../src/imgs/pngwing.com.png'
import { BatAlert } from '../batAlert/batAlert';

import { styles } from './batForm.style';

export function BatForm() {
   
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    
    const handleEnviar = () => {
        console.log('Dados enviados:', nome, email, telefone, mensagem);
      };
  return (
    <View style={styles.contain}>
      <View 
      style={styles.containLogo}>
        <Image
          style={styles.batLogo}
        source={batLogo}></Image>
      </View>
      
      <View style={styles.containInput}>
    <TextInput
      placeholder="Nome"
      value={nome}
      onChangeText={(texto) => setNome(texto)}
        style={styles.input}
    />
    <TextInput
      placeholder="E-mail"
      value={email}
      onChangeText={(texto) => setEmail(texto)}
      style={styles.input}
    />
    <TextInput
      placeholder="Telefone"
      value={telefone}
      onChangeText={(texto) => setTelefone(texto)}
      style={styles.input}
    />
    <TextInput
      placeholder="Mensagem"
      value={mensagem}
      onChangeText={(texto) => setMensagem(texto)}
      style={styles.input}
    />
      <Text style={styles.buttonEnviar} onPress={handleEnviar}> Enviar</Text>
      </View>
  </View>
  );
}