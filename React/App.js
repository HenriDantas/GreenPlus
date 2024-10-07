import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Login } from './Login'

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Login/> */}
    
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          // value={email}
          // onChangeText={setEmail}
          // keyboardType="email-address"
          // autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          // value={password}
          // onChangeText={setPassword}
          // autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => alert('PARABENSSS\nVC É UM VIADINHOOOO EBA!')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
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
});
