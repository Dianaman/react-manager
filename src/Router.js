import React from 'react';
import { Image, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeAdmin from './components/EmployeeAdmin';
import EmployeeMessage from './components/EmployeeMessage';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth" 
				navigationBarStyle={styles.navigationBarStyle} 
				titleStyle={styles.titleStyle}>
				<Scene key="login" component={LoginForm} title="Please login" />
			</Scene>
			<Scene key="main" 
				navigationBarStyle={styles.navigationBarStyle} 
				titleStyle={styles.titleStyle}>
				<Scene 
					key="employeeList" 
					component={EmployeeList} 
					renderLeftButton={()=> {return <AppLogo/>;}}
					onLeft={()=>{}}
					title="Manager"
					rightTitle="Add"
					onRight={() => Actions.employeeAdmin()}
				/>
				<Scene
					key="employeeAdmin"
					component={EmployeeAdmin}
					title="Manage Employee"
				/>
				<Scene
					key="employeeMessage"
					component={EmployeeMessage}
					title="Message Employee"
				/>
			</Scene>
		</Router>
	);
};

const styles = {
	navigationBarStyle: {
		backgroundColor: '#333333'
	},
	titleStyle: {
		color: 'white'
	}
}

const AppLogo = () => {
	return (
		<View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
			<Image source={require('./manager-icon.png')} style={{width:35, height:35}}/>
		</View>
	);
}

export default RouterComponent;