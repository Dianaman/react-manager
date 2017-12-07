import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGGING_USER
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
};

export const loginUser = ( email, password ) => {
	return (dispatch) => {
		dispatch({
			type: LOGGING_USER
		});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch((error) => loginUserFail(dispatch, error));
			});
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	})
}

const loginUserFail = (dispatch, error) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: error
	})
}