import React, { useState}  from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import Firebase from './firebase'

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" 
                onPress={() => {
                  Firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .then(() => navigation.navigate('Home'))
                  .catch(error => console.log(error))
                }}
         />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    )
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
