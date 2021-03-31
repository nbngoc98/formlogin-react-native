import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Firebase from './firebase'

class Home extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = Firebase.auth()

    this.setState({ currentUser })
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Xin chào tài khoản {currentUser && currentUser.email}!
        </Text>
        <TouchableOpacity style={{padding:20}} 
                            onPress={()=> Firebase.auth().signOut()} >
                <Text style={{color:'red'}} >Logout</Text>
          </TouchableOpacity>
      </View>
    )
  }
 
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
