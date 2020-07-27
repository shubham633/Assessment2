import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AsyncStorage from '@react-native-community/async-storage';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Dashboard from './src/screens/Dashboard';
import Authloading from './src/screens/Authloading';
import Logout from './src/screens/Logout';


const AppDrawerNavigator = createDrawerNavigator({  
	Dashboard:{
		screen:Dashboard,
	},
	Logout:{
		screen:Logout,
	},
   
});
const AppStack = createStackNavigator({ 
	Dashboard:{
		screen:AppDrawerNavigator,
	},
	Logout:{
		screen:Logout,
	},
	 });
const AuthStack = createStackNavigator({ 
	Signin:{
		screen:Signin,
	},
	Signup:{
		screen:Signup,
	},
	 });


const SwitchNavigator = createSwitchNavigator({
	Authloading:{
		screen: Authloading,
	},
	Dashboard:{
		screen:AppStack,
	},
	Signin:{
		screen:AuthStack,
	},	
}
);

export default createAppContainer(SwitchNavigator);