import React,{Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TextInput,AsyncStorage} from 'react-native';

export default class Signup extends Component<props>{
    saveData(){   
    let obj = {  
      name: 'shubham',  
      email: 'shubham@gmail.com',  
      password:'admin',  
    }  
    AsyncStorage.setItem('userToken',JSON.stringify(obj));  
    alert('Account created sucessfully')
  }  



  render(){
    return(
      <View style={styles.container}>
      <TextInput  style={styles.textField}
      placeholder="name"  />
      <TextInput  style={styles.textField}
      placeholder="email"
      keyboardType="email-address" />

      <TextInput secureTextEntry style={styles.textField}
      placeholder="password"/>

      <TouchableOpacity style={styles.pressBtn} onPress={this.saveData}>
      <Text>Create Account</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.pressBtn} onPress={()=>
        this.props.navigation.navigate('Signin')}>
      <Text>Login</Text>
      </TouchableOpacity>
      </View>
      );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#465881',
  },
  textField:{
    width:'90%',
    backgroundColor:"white",
    padding:15,
    marginBottom:10,
    borderRadius:30,
  },
  pressBtn:{
    width:"60%",
    backgroundColor:"red",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30
  }
});