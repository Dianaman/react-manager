import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMPLOYEE_FIELD_UPDATE, 
	EMPLOYEE_FORM_RESET, 
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_MESSAGE,
	EMPLOYEE_DELETE
} from './types';

export const employeeFieldUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_FIELD_UPDATE,
		payload: { prop, value }
	}
}

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	}
}

export const employeeCreate = (name, phone, shift) => {

	const {currentUser} = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees`)
			.push({name, phone, shift})
			.then(()=> {
				dispatch({type: EMPLOYEE_FORM_RESET});
				Actions.employeeList({type:'reset'})
			});
	}
}


export const employeeSave = (name, phone, shift, uid) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
			.set({name, phone, shift})
			.then(()=> {
				dispatch({type: EMPLOYEE_FORM_RESET});
				Actions.employeeList({type:'reset'});
			});
	}
}

export const employeeDelete = (uid) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(()=> {
				dispatch({type: EMPLOYEE_FORM_RESET});
				Actions.employeeList({type:'reset'});
			});
	}
}