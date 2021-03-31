import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase from './firebase'


const Loading = ({navigation}) => {

  function listener(user) {
    if (!user) {
      navigation.navigate('SignUp')
    } else {
      navigation.navigate('Home')
    }
  }
  
  Firebase.auth().onAuthStateChanged(listener);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})