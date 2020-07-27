import React,{Component} from 'react';
import {AsyncStorage, Button} from 'react-native';

export default class Logout extends Component{

	  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Signin');
  };
	render()
	{
		return(
			 <Button title="click for sign out" onPress={this._signOutAsync} />
     );
}
}