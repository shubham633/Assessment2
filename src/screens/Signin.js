import React,{Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TextInput,AsyncStorage} from 'react-native';

export default class Signin extends Component 
{
  constructor(props){
    super(props);
    this.state={
      useremail:'',
      userpassword:''
    }
  }
  _signin = async () => {
       try{  
    let user = await AsyncStorage.getItem('userToken');  
      let parsed = JSON.parse(user);  
       if(parsed.email === this.state.useremail && parsed.password === this.state.userpassword)
      this.props.navigation.navigate('Dashboard');
  else
    alert('username or password is incorrect');
    }  
    catch(error){  
      alert(error)  
    }  
  }; 
  
  render() {
    return(
      <View style={styles.container}>
      <TextInput  style={styles.textField}
      placeholder="email"
      keyboardType="email-address"
       onChangeText={useremail => this.setState({useremail})}
        value={this.state.useremail}
      />

      <TextInput secureTextEntry style={styles.textField}
      placeholder="Password"
       onChangeText={userpassword => this.setState({userpassword})}
        value={this.state.userpassword}
    />

      <TouchableOpacity style={styles.pressBtn} 
      onPress={this._signin}>
      <Text>Login</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.pressBtn} 
      onPress={()=>this.props.navigation.navigate('Signup')}>
      <Text>Create Account</Text>
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


