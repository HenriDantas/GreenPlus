import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Login } from './Login'
import React, { useState } from 'react';
import axios from 'axios';



export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.15.71:1111/api/Auth/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,  // ou "email", se o backend aceitar "email"
          password: password,
        }),
      });
      console.log('Response', response);
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);  // Armazena o token recebido
        setErrorMessage('');   // Limpa qualquer mensagem de erro
        alert('Login realizado com sucesso!');
      } else {
        setErrorMessage('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      // console.error('Erro:', errorData);
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Ocorreu um erro ao tentar fazer login.');
    }
  };


  return (
    <View style={styles.container}>
    {/* <Login/> */}
    
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user}
          onChangeText={setUser}
          autoCapitalize="none"
          // keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        {token ? <Text style={styles.successText}>Token: {token}</Text> : null}
        {/* <Text>VAI SE FUDE NPM E NODE SLA OQ MAIS FODACE</Text>
        <StatusBar style="auto" /> */}
      </View>

    </View>
  );
}

const windowDimensions = Dimensions.get('window');
const height = windowDimensions.height;
const width = windowDimensions.width;


const styles = StyleSheet.create({
  container: {
    width: width,
    height: height + 50, 
    backgroundColor: '#81F79F',
    alignItems: 'center',
    // borderRadius: '300',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width * 0.7,
    height: height * 0.5, 
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'black',
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#DF3A01',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 30,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  input: {
    marginBottom: 10,
    width: 200,
    height: 40,
    borderColor: 'black',  
    borderWidth: 1,
    borderRadius: 20,      
    paddingHorizontal: 10, 
  },

  errorText: {
    color: 'red',
    marginTop: 10,
  },

  successText: {
    color: 'green',
    marginTop: 10,
  },
});
