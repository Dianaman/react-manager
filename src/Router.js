import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeAdmin from './components/EmployeeAdmin';
import EmployeeMessage from './components/EmployeeMessage';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please login" />
			</Scene>
			<Scene key="main">
				<Scene 
					key="employeeList" 
					component={EmployeeList} 
					title="Employees"
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

export default RouterComponent;